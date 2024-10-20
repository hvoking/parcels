// Context imports
import { DimensionsProvider } from './dimensions';
import { SizesProvider } from './sizes';
import { ApiProvider } from './api';
import { MapsProvider } from './maps';

export const MainProvider = ({ children }: any) => {
	return (
    	<DimensionsProvider>
		<MapsProvider>
		<ApiProvider>
		<SizesProvider>
			{children}
		</SizesProvider>
		</ApiProvider>
		</MapsProvider>
		</DimensionsProvider>
	)
}

MainProvider.displayName="MainProvider";