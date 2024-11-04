// React imports
import { useState, useEffect, useContext, createContext } from 'react';

const ZonesApiContext: React.Context<any> = createContext(null)

export const useZonesApi = () => {
	return (
		useContext(ZonesApiContext)
	)
}

export const ZonesApiProvider = ({children}: any) => {
	const [ zonesData, setZonesData ] = useState<any>(null)

	useEffect(() => {
	  const fetchData = async () => {
  	    const url = `${process.env.REACT_APP_API_URL}/zones_api?table_schema=zone&table_name=blumenau`;
  	    const res = await fetch(url);
  	    const receivedData = await res.json();
	  	setZonesData(receivedData[0]);
	  }
	  fetchData();
	}, []);

	return (
		<ZonesApiContext.Provider value={{ zonesData }}>
			{children}
		</ZonesApiContext.Provider>
	)
}

ZonesApiContext.displayName = "ZonesApiContext";