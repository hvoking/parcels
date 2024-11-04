// React imports
import { useState, useEffect, useContext, createContext } from 'react';

const CitiesApiContext: React.Context<any> = createContext(null)

export const useCitiesApi = () => {
	return (
		useContext(CitiesApiContext)
	)
}

export const CitiesApiProvider = ({children}: any) => {
	const [ citiesData, setCitiesData ] = useState<any>(null)

	useEffect(() => {
	  const fetchData = async () => {
  	    const url = `${process.env.REACT_APP_API_URL}/limits_api?schema=limits&table=blumenau`;
  	    const res = await fetch(url);
  	    const receivedData = await res.json();
	  	setCitiesData(receivedData[0]);
	  }
	  fetchData();
	}, []);

	return (
		<CitiesApiContext.Provider value={{ citiesData }}>
			{children}
		</CitiesApiContext.Provider>
	)
}

CitiesApiContext.displayName = "CitiesApiContext";