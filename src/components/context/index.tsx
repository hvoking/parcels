// Context imports
import { FiltersProvider } from './filters';
import { SizesProvider } from './sizes';
import { ApiProvider } from './api';
import { MapsProvider } from './maps';

export const MainProvider = ({ children }: any) => {
	return (
		<FiltersProvider>
		<MapsProvider>
		<ApiProvider>
		<SizesProvider>
			{children}
		</SizesProvider>
		</ApiProvider>
		</MapsProvider>
		</FiltersProvider>
	)
}

MainProvider.displayName="MainProvider";