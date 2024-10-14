// React imports
import { useState, useEffect, useContext, createContext } from 'react';

const ParcelsApiContext: React.Context<any> = createContext(null)

export const useParcelsApi = () => {
	return (useContext(ParcelsApiContext))
}

export const ParcelsApiProvider = ({children}: any) => {
	const [ parcelsData, setParcelsData ] = useState<any>(null);

	useEffect(() => {
		const fetchData = async () => {
	  	const tempUrl = `
	    	${process.env.REACT_APP_API_URL}/
	    	parcels_api
	    `
	  	const url = tempUrl.replace(/\s/g, '');
	    const res = await fetch(url);
	    const receivedData = await res.json();
	    setParcelsData(receivedData[0][0]);
	  }
	  fetchData();
	}, []);

	return (
		<ParcelsApiContext.Provider value={{ parcelsData }}>
			{children}
		</ParcelsApiContext.Provider>
	)
}

ParcelsApiContext.displayName = "ParcelsApiContext";