// React imports
import { useState, useEffect } from 'react';

// Context imports
import { useStyles } from 'context/maps/styles';

// Third party imports
import { Source, Layer } from 'react-map-gl';

export const Segments = () => {
	const { fetchData, getTilesUrl } = useStyles();
	const [ styleData, setStyleData ] = useState<any[]>([]);

	const schemaName = "riyadh";
	const tableName = "riyadh_segments";
	
  	useEffect(() => {
    	const loadData = async () => {
			const data = await fetchData(schemaName, tableName);
			setStyleData(data);
		}
		loadData();
	}, []);

	const url = getTilesUrl(schemaName, tableName)

  	const layers = styleData.map((style: any, index: number) => {
		return (
			<Layer key={index} {...style}/>
		)
	});

	return (
		<Source 
			id="riyadh-segments" 
			type="vector" 
			tiles={[ url ]}
		>
			{layers}
		</Source>
	)
}

Segments.displayName="Segments"