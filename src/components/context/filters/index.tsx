// App imports
import { GeoProvider } from './geo';
import { DimensionsProvider } from './dimensions';

export const FiltersProvider = ({children}: any) => {
  return (
    <GeoProvider>
    <DimensionsProvider>
      {children}
    </DimensionsProvider>
    </GeoProvider>
  )
}

FiltersProvider.displayName="FiltersProvider";