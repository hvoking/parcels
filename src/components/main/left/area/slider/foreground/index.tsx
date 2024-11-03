export const Foreground = ({ xScale, leftPosition, rightPosition, circleRadius, activeForeground }: any) => {
	return (
		<rect
			x={xScale(leftPosition)}
			y={circleRadius / 2}
			rx={circleRadius / 2}
			ry={circleRadius / 2}
			width={xScale(rightPosition) - xScale(leftPosition)}
			height={circleRadius}
			fill={
				activeForeground ? 
				"rgba(80, 103, 116, 1)" : 
				"rgba(80, 103, 116, 0.8)"
			}
		/>
	)
}

Foreground.displayName="Foreground";