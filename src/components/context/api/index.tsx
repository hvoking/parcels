// App imports
import { ZoneApiProvider } from './zone';
import { GoogleApiProvider } from './google';

export const ApiProvider = ({children}: any) => {
  return (
    <ZoneApiProvider>
    <GoogleApiProvider>
      {children}
    </GoogleApiProvider>
    </ZoneApiProvider>
  )
}

ApiProvider.displayName="ApiProvider";