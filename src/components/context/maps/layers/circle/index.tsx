// React imports
import { useContext, createContext } from 'react';

// Context imports
import { useCircle } from '../../../circle';

// Third-party imports
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import { GeoJsonLayer } from 'deck.gl';

const CircleLayerContext: React.Context<any> = createContext(null);

export const useCircleLayer = () => {
	return (
		useContext(CircleLayerContext)
	)
}

export const CircleLayerProvider = ({children}: any) => {
	const { circleGeometry } = useCircle();

	const circleLayer = circleGeometry &&
		new GeoJsonLayer({
			id: 'circle',
			data: circleGeometry,
			getFillColor: [126, 126, 132, 80],
			getLineColor: [126, 126, 132, 80],
			parameters: { depthTest: false },
			getLineWidth: 1,
		});

	return (
		<CircleLayerContext.Provider value={{ circleLayer }}>
			{children}
		</CircleLayerContext.Provider>
	)
}

CircleLayerContext.displayName = "CircleLayerContext";