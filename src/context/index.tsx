import { CircleProvider } from './circle';
import { MaskProvider } from './mask';
import { MapsProvider } from './maps';
import { BedrockApiProvider } from './bedrock';
import { ChatProvider } from './chat';

export const MainProvider = ({children}: any) => {
  return (
    <MapsProvider>
    <CircleProvider>
    <MaskProvider>
    <BedrockApiProvider>
    <ChatProvider>
      {children}
    </ChatProvider>
    </BedrockApiProvider>
    </MaskProvider>
    </CircleProvider>
    </MapsProvider>
  )
}

MainProvider.displayName="MainProvider";