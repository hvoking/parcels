// App imports
import { ReCenter } from './reCenter';
import './styles.scss';

// Context imports
import { useMapbox } from '../../../context/filters/mapbox';

// Third party imports
import { NavigationControl } from 'react-map-gl';

export const Controllers = () => {
	const { viewport, setViewport, placeCoordinates } = useMapbox();

	return (
		<>
			<NavigationControl/>
			<ReCenter
				viewport={viewport} 
				setViewport={setViewport} 
				placeCoordinates={placeCoordinates}
			/>
		</>
	)
}

Controllers.displayName="Controllers";