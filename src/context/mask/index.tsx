// React imports
import { useState, useEffect, useMemo, useContext, createContext } from 'react';

// Context imports
import { useMapProperties } from '../maps/properties';
import { useCircle } from '../circle';

// Third-party imports
import * as turf from '@turf/turf';

const MaskContext: React.Context<any> = createContext(null)

export const useMask = () => {
	return (
		useContext(MaskContext)
	)
}

export const MaskProvider = ({children}: any) => {
	const { mapRef } = useMapProperties();
	const { circleGeometry } = useCircle();

	const [ mapFeatures, setMapFeatures ] = useState([]);
	const [ activeFeatures, setActiveFeatures ] = useState(false);

	useEffect(() => {
		const map = mapRef.current;
		if (!map) return;
		const onData = (e: any) => {
	        if (e.tile) {
	            setActiveFeatures((prev) => !prev);
	        }
	    };
	    map.on('data', onData);
	    return () => {
	        map.off('data', onData);
	    };
	}, [ mapRef.current ]);

	useEffect(() => {
		const map = mapRef.current;
		if (!map) return;
		setMapFeatures(map.queryRenderedFeatures({ layers: ["parcel"]}));
	}, [ activeFeatures, mapRef.current ]);

	const maskProperties = useMemo(() => {
	    return mapFeatures.filter((item: any) => {
            const centroid = turf.centroid(item.geometry);
            return turf.booleanPointInPolygon(centroid, circleGeometry);
	    });
	}, [ mapFeatures, circleGeometry ]);

	// Function to download geoJsonData as a file
	const downloadGeoJson = (data: any) => {
		const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data));
		const downloadAnchorNode = document.createElement('a');
		downloadAnchorNode.setAttribute("href", dataStr);
		downloadAnchorNode.setAttribute("download", "data.geojson");
		document.body.appendChild(downloadAnchorNode); // required for firefox
		downloadAnchorNode.click();
		downloadAnchorNode.remove();
	};

	return (
		<MaskContext.Provider value={{ maskProperties, downloadGeoJson }}>
			{children}
		</MaskContext.Provider>
	)
}

MaskContext.displayName = "MaskContext";