// Context imports
import { useMask } from '../../../context/mask';

// Third party imports
import { Source, Layer } from 'react-map-gl';

const getColor = (item: any) => {
	const { r, g, b, a } = item;
	const color = `rgba(${r * 255}, ${g * 255}, ${b * 255}, ${a})`;
	return color
}

export const Mask = () => {
	const { maskProperties } = useMask();

	if (!maskProperties) return <></>

	// Filter by fill color
	const features = maskProperties.filter((item: any) => {
        const stringList = Object.keys(item.layer.paint);
        return stringList.includes("fill-color");
    });

	const updatedFeatures = features.map((item: any) => {
		const currentColor = getColor(item.layer.paint["fill-color"]);
		return ({
			type: "Feature",
			geometry: item.geometry,
			properties: {
				...item.properties, 
				'fill-color': currentColor
			}
		})
	});
		
	const geoJsonData: any = {
        "type": "FeatureCollection",
        "features": updatedFeatures
    };

	return (
		<Source id="polygon-data" type="geojson" data={geoJsonData}>
	        <Layer
	          id="extruded-polygons"
	          type="fill-extrusion"
	          paint={{
	            'fill-extrusion-color': ['get', 'fill-color'],
	            'fill-extrusion-height': ['*', ['get', 'indice_fin'], 1000],
	            'fill-extrusion-base': 0,
	            'fill-extrusion-opacity': 0.9
	          }}
	        />
	      </Source>
	)
}

Mask.displayName="Mask"