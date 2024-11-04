// React imports
import { useState, useEffect, useContext, createContext } from 'react';

// Context imports
import { useMapbox } from '../../../filters/mapbox';

const ReverseGeocodingApiContext: React.Context<any> = createContext(null)

export const useReverseGeocodingApi = () => {
	return (
		useContext(ReverseGeocodingApiContext)
	)
}

export const ReverseGeocodingApiProvider = ({children}: any) => {
	const { placeCoordinates } = useMapbox();
	const [ currentAddress, setCurrentAddress ] = useState<any>(null);

	const { latitude, longitude } = placeCoordinates;

	useEffect(() => {
	  const fetchData = async () => {
	    const tempUrl = `
	    	${process.env.REACT_APP_API_URL}/
	    	reverse_api
	    	?language=en
	    	&latitude=${latitude}
	    	&longitude=${longitude}
	    `;
	    const url = tempUrl.replace(/\s/g, '');
	    const res = await fetch(url);
	    const receivedData = await res.json();
	    const placeInformation = receivedData.address_components;
	    setCurrentAddress(placeInformation);
	  }
	  placeCoordinates && fetchData();
	}, [ ]);

	return (
		<ReverseGeocodingApiContext.Provider value={{ currentAddress, setCurrentAddress }}>
			{children}
		</ReverseGeocodingApiContext.Provider>
	)
}

ReverseGeocodingApiContext.displayName = "ReverseGeocodingApiContext";