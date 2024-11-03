export const Foreground = ({ activeForeground, xScale, minBound, radiusPosition, circleRadius }: any) => {
	return (
		<rect
			x={xScale(minBound)}
			y={circleRadius / 2}
			rx={circleRadius / 2}
			ry={circleRadius / 2}
			width={xScale(radiusPosition) - xScale(minBound)}
			height={circleRadius}
			fill={
				activeForeground ?
				"rgba(66, 135, 245, 1)" :
				"rgba(66, 135, 245, 0.8)"
			}
		/>
	)
}

Foreground.displayName="Foreground";