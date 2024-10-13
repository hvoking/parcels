// Context imports
import { MapsProvider } from './maps';
import { FiltersProvider } from './filters';
import { SizesProvider } from './sizes';
import { ApiProvider } from './api';
import { StylesProvider } from './styles';
import { MaskProvider } from './mask';
import { CircleProvider } from './circle';

export const MainProvider = ({ children }: any) => {
	return (
		<FiltersProvider>
		<ApiProvider>
		<SizesProvider>
		<MapsProvider>
		<StylesProvider>
		<CircleProvider>
		<MaskProvider>
			{children}
		</MaskProvider>
		</CircleProvider>
		</StylesProvider>
		</MapsProvider>
		</SizesProvider>
		</ApiProvider>
		</FiltersProvider>
	)
}

MainProvider.displayName="MainProvider";