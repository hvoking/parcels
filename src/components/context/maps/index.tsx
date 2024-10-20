// Context imports
import { StylesProvider } from './styles';
import { MaskProvider } from './mask';
import { CircleProvider } from './circle';
import { EventsProvider } from './events';
import { MapboxProvider } from './mapbox';

export const MapsProvider = ({ children }: any) => {
	return (
		<MapboxProvider>
		<CircleProvider>
		<EventsProvider>
		<StylesProvider>
		<MaskProvider>
			{children}
		</MaskProvider>
		</StylesProvider>
		</EventsProvider>
		</CircleProvider>
		</MapboxProvider>
	)
}

MapsProvider.displayName="MapsProvider";