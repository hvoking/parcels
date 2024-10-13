// App imports
import { ParcelsProvider } from './parcels';
import { CircleLayerProvider } from './circle';

export const LayersProvider = ({children}: any) => {
  return (
    <ParcelsProvider>
    <CircleLayerProvider>
      {children}
    </CircleLayerProvider>
    </ParcelsProvider>
  )
}

LayersProvider.displayName="LayersProvider";