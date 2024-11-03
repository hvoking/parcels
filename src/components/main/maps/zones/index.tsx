// React imports
import { useState, useEffect } from 'react';

// Context imports
import { useStyles } from '../../../context/maps/styles';

// Third party imports
import { Source, Layer } from 'react-map-gl';

export const Zones = () => {
	const { fetchData, getTilesUrl } = useStyles();
	const [ styleData, setStyleData ] = useState<any[]>([]);
	
	const tableName = "blumenau";

    useEffect(() => {
    	const loadData = async () => {
			const data = await fetchData('', tableName);
			setStyleData(data);
		}
		loadData();
	}, []);

	const url = getTilesUrl("zone", tableName)

	const layers = styleData.map((style: any, index: number) => {
		return (
			<Layer key={index} {...style}/>
		)
	});

	return (
		<Source 
			id="zone-style" 
			type="vector" 
			tiles={[ url ]}
		>
			{layers}
		</Source>
	)
}

Zones.displayName="Zones"