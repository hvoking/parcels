// Context imports
import { EventsProvider } from './events';
import { FiltersProvider } from './filters';
import { SizesProvider } from './sizes';
import { ApiProvider } from './api';
import { StylesProvider } from './styles';
import { MaskProvider } from './mask';
import { CircleProvider } from './circle';

export const MainProvider = ({ children }: any) => {
	return (
		<FiltersProvider>
		<CircleProvider>
		<ApiProvider>
		<SizesProvider>
		<EventsProvider>
		<StylesProvider>
		<MaskProvider>
			{children}
		</MaskProvider>
		</StylesProvider>
		</EventsProvider>
		</SizesProvider>
		</ApiProvider>
		</CircleProvider>
		</FiltersProvider>
	)
}

MainProvider.displayName="MainProvider";