// App imports
import { ZoneApiProvider } from './zone';
import { GoogleApiProvider } from './google';
import { ParcelsApiProvider } from './parcels';
import { PolygonApiProvider } from './polygon';

export const ApiProvider = ({children}: any) => {
  return (
    <PolygonApiProvider>
    <ParcelsApiProvider>
    <ZoneApiProvider>
    <GoogleApiProvider>
      {children}
    </GoogleApiProvider>
    </ZoneApiProvider>
    </ParcelsApiProvider>
    </PolygonApiProvider>
  )
}

ApiProvider.displayName="ApiProvider";