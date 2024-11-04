// Context imports
import { FiltersProvider } from './filters';
import { SizesProvider } from './sizes';
import { MapsProvider } from './maps';
import { ApiProvider } from './api';

export const MainProvider = ({ children }: any) => {
	return (
    	<FiltersProvider>
    	<ApiProvider>
		<MapsProvider>
		<SizesProvider>
			{children}
		</SizesProvider>
		</MapsProvider>
		</ApiProvider>
		</FiltersProvider>
	)
}

MainProvider.displayName="MainProvider";