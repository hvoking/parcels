// App imports
import { ZoneApiProvider } from './zone';
import { GoogleApiProvider } from './google';
import { ParcelsApiProvider } from './parcels';

export const ApiProvider = ({children}: any) => {
  return (
    <ParcelsApiProvider>
    <ZoneApiProvider>
    <GoogleApiProvider>
      {children}
    </GoogleApiProvider>
    </ZoneApiProvider>
    </ParcelsApiProvider>
  )
}

ApiProvider.displayName="ApiProvider";