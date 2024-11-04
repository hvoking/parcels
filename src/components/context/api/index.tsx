import { CitiesApiProvider } from './cities';
import { GoogleApiProvider } from './google';

export const ApiProvider = ({ children }: any) => {
	return (
		<CitiesApiProvider>
		<GoogleApiProvider>
			{children}
		</GoogleApiProvider>
		</CitiesApiProvider>
	)
}

ApiProvider.displayName="ApiProvider";