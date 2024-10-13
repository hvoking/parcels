// App imports
import { GeoProvider } from './geo';
import { DimensionsProvider } from './dimensions';
import { StyleSheetProvider } from './stylesheet';

export const FiltersProvider = ({children}: any) => {
  return (
    <GeoProvider>
    <DimensionsProvider>
    <StyleSheetProvider>
      {children}
    </StyleSheetProvider>
    </DimensionsProvider>
    </GeoProvider>
  )
}

FiltersProvider.displayName="FiltersProvider";