export const Circle = ({
	innerWidth,
	innerHeight,
	innerRadius,
	strokeWidth,
	currentCircunference,
	circumference,
	totalCircunference,
	currentPercent,
	stroke,
}: any) => {
	return (
		<circle
			cx={innerWidth/2}
			cy={innerHeight/2}
			fill="none"
			r={innerRadius}
			stroke={stroke}
			strokeWidth= {strokeWidth}
			strokeDasharray={`${currentCircunference} ${circumference - currentCircunference}`}
			strokeDashoffset={-(totalCircunference - currentCircunference)}
			style={{cursor: "pointer"}}
		/>
	)
}

Circle.displayName="Circle";