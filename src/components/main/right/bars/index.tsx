// App imports
import './styles.scss';

// Third-party imports
import * as d3 from "d3";

export const Bars = ({ data, name }: any) => {
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

	const sortedData = Object.keys(currentDistribution).sort((a, b) => currentDistribution[b] - currentDistribution[a]);

	return (
		<div className="bars-wrapper-wrapper">
			{sortedData.slice(0, 4).map((item: any) => {
				const currentPercent = currentDistribution[item] / sumOfValues;
				const currentColor = colors[item];
				return (
					<div key={item} className="bars">
						<div>{item}</div>
						<div 
							style={{
								width: "25px", 
								height: "20px",
								backgroundColor: currentColor
							}}
						></div>
						<div>{currentDistribution[item]}</div>
					</div>
				)
			})}
		</div>
	)
}

Bars.displayName="Bars";