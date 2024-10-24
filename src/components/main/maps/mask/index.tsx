// Context imports
import { useMask } from '../../../context/maps/mask';
import { useParcelAreas } from '../../../context/filters/areas/parcel';
import { useBuiltAreas } from '../../../context/filters/areas/built';

// Third party imports
import { Source, Layer } from 'react-map-gl';

const hexToRgba = (hex: any, opacity: any) => {
	if (hex) {
		hex = hex.replace(/^#/, '');

		let r = parseInt(hex.substring(0, 2), 16);
		let g = parseInt(hex.substring(2, 4), 16);
		let b = parseInt(hex.substring(4, 6), 16);

		return `rgba(${r}, ${g}, ${b}, ${opacity})`;
	}
	return "rgba(0, 0, 0, 0)"
}

export const Mask = () => {
	const { maskProperties } = useMask();
	const { parcelAreaFrom, parcelAreaTo } = useParcelAreas();
	const { builtAreaFrom, builtAreaTo } = useBuiltAreas();

	if (!maskProperties) return <></>

	const features = maskProperties.filter((item: any) => {
        const paint = Object.keys(item.layer.paint);
        const isFillLayer = paint.includes("fill-color");
        return isFillLayer;
    });

	const updatedFeatures = features.map((item: any) => {
		const area = item.properties.area_carto;
		const constructedArea = item.properties.constructed_area;

		const constructedAreaArray = 
			constructedArea ? 
			constructedArea.replace(/[{}]/g, '').split(',') : 
			[];
		
		const sumConstructedArea = 
			constructedAreaArray.reduce((total: any, num: any) => 
				total + parseFloat(num), 
			0);
		
		const opacity = 
			area > parcelAreaFrom && 
			area < parcelAreaTo &&
			sumConstructedArea >= builtAreaFrom && 
			sumConstructedArea <= builtAreaTo
			? "1" : "0";

		const currentColor = hexToRgba(item.properties["zone_color"], opacity);
		const currentHeight = item.properties["height"] ? parseInt(item.properties["height"]) : 60;

		return ({
			type: "Feature",
			geometry: item.geometry,
			properties: {
				...item.properties, 
				'fill-color': currentColor,
				'current-height': currentHeight
			}
		})
	});
		
	const geoJsonData: any = {
        "type": "FeatureCollection",
        "features": updatedFeatures
    };

	return (
		<Source id="polygon-data" type="geojson" data={ geoJsonData }>
	        <Layer
	          id="extruded-polygons"
	          type="fill-extrusion"
	          paint={{
	            'fill-extrusion-color': ['get', 'fill-color'],
	            'fill-extrusion-height': ['get', 'current-height'],
	            'fill-extrusion-base': 0,
	            'fill-extrusion-opacity': 0.5
	          }}
	        />
	      </Source>
	)
}

Mask.displayName="Mask"