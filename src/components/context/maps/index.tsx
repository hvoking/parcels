// Context imports
import { StylesProvider } from './styles';
import { MaskProvider } from './mask';
import { EventsProvider } from './events';

export const MapsProvider = ({ children }: any) => {
	return (
		<EventsProvider>
		<StylesProvider>
		<MaskProvider>
			{children}
		</MaskProvider>
		</StylesProvider>
		</EventsProvider>
	)
}

MapsProvider.displayName="MapsProvider";