// App imports
import { SVGWrapper } from './svg';
import { Circle } from './circle';

// Context imports
import { useGaugeSizes } from '../../../context/sizes/gauge';

// Third party imports
import * as d3 from "d3";

export const Gauge = ({ data, name }: any) => {
	const { innerWidth, innerHeight } = useGaugeSizes();
	const radius = d3.min([innerWidth, innerHeight]) / 2;

	let totalCircunference = 0;
	
	const strokeWidth = radius * 0.27;
	const innerRadius = radius - ( strokeWidth / 2 );

	const circumference = innerRadius * 2 * Math.PI;

	if (!data) return <></>

	const colors = data.reduce((total: any, curr: any) => {
		const currentItem = curr[name];
		if (!total[currentItem]) {
			total[currentItem] = curr["colors"]
		}
		return total
	}, {})

	const distribution = data.reduce((acc: any, curr: any) => {
	  if (curr[name]) {
	    acc[curr[name]] = (acc[curr[name]] || 0) + 1;
	  }
	  return acc;
	}, {});

	const sumOfValues = d3.sum(Object.values(distribution));

	const percentages = Object.keys(distribution).reduce((total: any,item: any) => {
		total[item] = distribution[item] / sumOfValues;
		return total
	}, {});

	return (
		<SVGWrapper>
			{Object.keys(percentages).map((item: any) => {
				const currentPercent = percentages[item] ? percentages[item] : 0;
				const currentCircunference = Math.round(circumference * currentPercent);
				const currentColor = colors[item];

				if (currentCircunference) {totalCircunference += currentCircunference}

				return (
					<g key={item}>
						{currentCircunference && 
							<Circle
								innerWidth={innerWidth}
								innerHeight={innerHeight}
								innerRadius={innerRadius}
								strokeWidth={strokeWidth}
								currentCircunference={currentCircunference}
								circumference={circumference}
								totalCircunference={totalCircunference}
								currentPercent={currentPercent}
								stroke={currentColor}
							/>
						 }
					</g>
				)
			})}
		</SVGWrapper>
	)
}

Gauge.displayName="Gauge";