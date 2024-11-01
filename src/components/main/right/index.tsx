// App imports
import { Zone } from './zone';
import { Gauge } from './gauge';
import { Bars } from './bars';
import './styles.scss';

// Context imports
import { useMask } from '../../context/maps/mask';

export const Right = () => {
	const { maskProperties } = useMask();
	const data = maskProperties.map((item: any) => item.properties);

	return (
		<div className="right-wrapper">
			<Zone/>
			<div className="right-gauge-wrapper">
				<div className="title-wrapper-style">Zone</div>
				<Gauge data={data} name="zone"/>
			</div>
			<Bars data={data} title="Zone" name="zone"/>
		</div>
	)
}

Right.displayName="Right";