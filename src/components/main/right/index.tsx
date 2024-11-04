// App imports
import { Info } from './info';
import { Gauge } from './gauge';
import { Bars } from './bars';
import { Cities } from './cities';
import './styles.scss';

// Context imports
import { useMask } from '../../context/maps/mask';

export const Right = () => {
	const { maskProperties } = useMask();
	const data = maskProperties.map((item: any) => item.properties);

	return (
		<div className="right-wrapper">
			<Cities/>
			<Info/>
			<div className="right-gauge-wrapper">
				<div className="title-wrapper-style">Lots per zone</div>
				<div style={{display: "grid", gridTemplateColumns: "2fr 3fr", height: "100%"}}>
					<Bars data={data} name="zone"/>
					<Gauge data={data} name="zone"/>
				</div>
			</div>
		</div>
	)
}

Right.displayName="Right";