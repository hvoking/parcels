export const Table = ({zone, height, occupancyRate, floorAreaRatio, color}: any) => {
	return (
		<div className="zone">
			<div className="zone-title" style={{backgroundColor: color, width: "40px", color: "rgba(33, 33, 43, 1)"}}>{zone}</div>
			<div className="zone-title">{height ? height : "Free"}<span style={{fontSize: "0.8em"}}>{height ? "m" : ""}</span></div>
			<div className="zone-title">{occupancyRate * 100}<span style={{fontSize: "0.8em"}}>%</span></div>
			<div className="zone-title">{floorAreaRatio}</div>
		</div>
	)
}

Table.displayName="Table";