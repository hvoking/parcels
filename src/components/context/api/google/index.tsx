// App imports
import { ReverseGeocodingApiProvider } from './reverse';

export const GoogleApiProvider = ({children}: any) => {
  return (
    <ReverseGeocodingApiProvider>
      {children}
    </ReverseGeocodingApiProvider>
  )
}

GoogleApiProvider.displayName="GoogleApiProvider";