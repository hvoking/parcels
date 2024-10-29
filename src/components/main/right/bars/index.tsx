// App imports
import './styles.scss';

// Third-party imports
import * as d3 from "d3";

export const Bars = ({ data, title, name }: any) => {
	if (!data) return <></>

	const colors = data.reduce((total: any, curr: any) => {
		const currentItem = curr[name];
		if (!total[currentItem]) {
			total[currentItem] = curr["colors"]
		}
		return total
	}, {});
		
	const currentDistribution = data.reduce((acc: any, curr: any) => {
	  if (curr[name]) {
	    acc[curr[name]] = (acc[curr[name]] || 0) + 1;
	  }
	  return acc;
	}, {});

	const sumOfValues = d3.sum(Object.values(currentDistribution));

	return (
		<div className="bars-wrapper-wrapper">
			{Object.keys(currentDistribution).slice(0, 3).map((item: any) => {
				const currentPercent = currentDistribution[item] / sumOfValues;
				const currentColor = colors[item];
				return (
					<div key={item} className="bars-wrapper">
						<div>{item.toLowerCase()}</div>
						<div className="bars">
							<div 
								style={{
									width: `${currentPercent * 100}%` , 
									backgroundColor: currentColor
								}}
							></div>
							<div>{currentDistribution[item]}</div>
						</div>
					</div>
				)
			})}
		</div>
	)
}

Bars.displayName="Bars";