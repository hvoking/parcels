// React imports
import { useState, useContext, createContext } from 'react';

const SvgMapSizesContext: React.Context<any> = createContext(null)

export const useSvgMapSizes = () => {
	return (
		useContext(SvgMapSizesContext)
	)
}

export const SvgMapSizesProvider = ({children}: any) => {
	const [ width, setWidth ] = useState<any>(null);
	const [ height, setHeight ] = useState<any>(null);

	const margin = {top: 20, bottom: 20, left: 20, right: 20}

	const innerWidth = width - margin.right - margin.left;
	const innerHeight = height - margin.top - margin.bottom;

	return (
		<SvgMapSizesContext.Provider value={{
			margin,
			width,
			height,
			setWidth,
			setHeight,
			innerWidth,
			innerHeight,
		}}>
			{children}
		</SvgMapSizesContext.Provider>
	)
}

SvgMapSizesContext.displayName = "SvgMapSizesContext";