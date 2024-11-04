// Context imports
import { FiltersProvider } from './filters';
import { SizesProvider } from './sizes';
import { MapsProvider } from './maps';

export const MainProvider = ({ children }: any) => {
	return (
    	<FiltersProvider>
		<MapsProvider>
		<SizesProvider>
			{children}
		</SizesProvider>
		</MapsProvider>
		</FiltersProvider>
	)
}

MainProvider.displayName="MainProvider";