// App imports
import { LayersProvider } from './layers';
import { MouseEventsProvider } from './events';

export const MapsProvider = ({children}: any) => {
  return (
    <LayersProvider>
    <MouseEventsProvider>
      {children}
    </MouseEventsProvider>
    </LayersProvider>
  )
}

MapsProvider.displayName="MapsProvider";