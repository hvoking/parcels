// App imports
import { MapEventsProvider } from './events';
import { MapPropertiesProvider } from './properties';
import { StylesProvider } from './styles';

export const MapsProvider = ({ children }: any) => {
	return (
		<MapPropertiesProvider>
		<MapEventsProvider>
		<StylesProvider>
			{children}
		</StylesProvider>
		</MapEventsProvider>
		</MapPropertiesProvider>
	)
}