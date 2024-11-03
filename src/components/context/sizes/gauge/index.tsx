// React imports
import { useState, useContext, createContext } from 'react';

const GaugeSizesContext: React.Context<any> = createContext(null)

export const useGaugeSizes = () => {
	return (
		useContext(GaugeSizesContext)
	)
}

export const GaugeSizesProvider = ({children}: any) => {
	const [ width, setWidth ] = useState<any>(null);
	const [ height, setHeight ] = useState<any>(null);

	const margin = {top: 10, bottom: 0, left: 0, right: 10}

	const innerWidth = width - margin.right - margin.left;
	const innerHeight = height - margin.top - margin.bottom;

	return (
		<GaugeSizesContext.Provider value={{
			margin,
			width,
			height,
			setWidth,
			setHeight,
			innerWidth,
			innerHeight,
		}}>
			{children}
		</GaugeSizesContext.Provider>
	)
}

GaugeSizesContext.displayName = "GaugeSizesContext";