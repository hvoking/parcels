// App imports
import { Area } from './area';
import { Catchment } from './catchment';
import { Built } from './built';
import { Zone } from './zone';
import './styles.scss';

export const Left = () => {
  return (
    <div className="left-wrapper">
      <div className="left-items-wrapper">
        <Catchment/>
        <Zone/>
        <Area/>
        <Built/>
      </div>
    </div>
  )
}

Left.displayName="Left"