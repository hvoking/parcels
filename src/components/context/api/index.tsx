import { CitiesApiProvider } from './cities';
import { GoogleApiProvider } from './google';
import { ZonesApiProvider } from './zones';

export const ApiProvider = ({ children }: any) => {
	return (
		<CitiesApiProvider>
		<GoogleApiProvider>
		<ZonesApiProvider>
			{children}
		</ZonesApiProvider>
		</GoogleApiProvider>
		</CitiesApiProvider>
	)
}

ApiProvider.displayName="ApiProvider";