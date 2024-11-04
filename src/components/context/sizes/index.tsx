// App imports
import { SliderSizesProvider } from './slider';
import { BarsSizesProvider } from './bars';
import { CircleSizesProvider } from './circle';
import { RadiusSizesProvider } from './radius';
import { GaugeSizesProvider } from './gauge';
import { CitiesSizesProvider } from './cities';

export const SizesProvider = ({children}: any) => {
  return (
    <CircleSizesProvider>
    <SliderSizesProvider>
    <BarsSizesProvider>
    <RadiusSizesProvider>
    <GaugeSizesProvider>
    <CitiesSizesProvider>
      {children}
    </CitiesSizesProvider>
    </GaugeSizesProvider>
    </RadiusSizesProvider>
    </BarsSizesProvider>
    </SliderSizesProvider>
    </CircleSizesProvider>
  )
}

SizesProvider.displayName="SizesProvider";