// App imports
import { ParcelsProvider } from './parcels';
import { CircleLayerProvider } from './circle';

export const LayersProvider = ({children}: any) => {
  return (
    <CircleLayerProvider>
    <ParcelsProvider>
      {children}
    </ParcelsProvider>
    </CircleLayerProvider>
  )
}

LayersProvider.displayName="LayersProvider";