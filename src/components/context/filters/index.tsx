// Context imports
import { AreasProvider } from './areas';
import { CircleProvider } from './circle';
import { MapboxProvider } from './mapbox';

export const FiltersProvider = ({ children }: any) => {
	return (
		<MapboxProvider>
    	<CircleProvider>
    	<AreasProvider>
			{children}
		</AreasProvider>
		</CircleProvider>
		</MapboxProvider>
	)
}

FiltersProvider.displayName="FiltersProvider";