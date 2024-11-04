// React imports
import { useState, useContext, createContext } from 'react';

const CitiesSizesContext: React.Context<any> = createContext(null)

export const useCitiesSizes = () => {
	return (
		useContext(CitiesSizesContext)
	)
}

export const CitiesSizesProvider = ({children}: any) => {
	const [ width, setWidth ] = useState<any>(null);
	const [ height, setHeight ] = useState<any>(null);

	const margin = {top: 10, bottom: 10, left: 0, right: 0}

	const innerWidth = width - margin.right - margin.left;
	const innerHeight = height - margin.top - margin.bottom;

	return (
		<CitiesSizesContext.Provider value={{
			margin,
			width,
			height,
			setWidth,
			setHeight,
			innerWidth,
			innerHeight,
		}}>
			{children}
		</CitiesSizesContext.Provider>
	)
}

CitiesSizesContext.displayName = "CitiesSizesContext";