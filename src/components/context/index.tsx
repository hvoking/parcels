// Context imports
import { GeoProvider } from './geo';
import { DimensionsProvider } from './dimensions';
import { SizesProvider } from './sizes';
import { ApiProvider } from './api';
import { MapsProvider } from './maps';

export const MainProvider = ({ children }: any) => {
	return (
		<GeoProvider>
    	<DimensionsProvider>
		<MapsProvider>
		<ApiProvider>
		<SizesProvider>
			{children}
		</SizesProvider>
		</ApiProvider>
		</MapsProvider>
		</DimensionsProvider>
    	</GeoProvider>
	)
}

MainProvider.displayName="MainProvider";