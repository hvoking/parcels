// App imports
import './styles.scss';

export const Header = () => {
	return (
		<div className="zone-header" style={{color: "rgba(255, 255, 255, 1)"}}>
			<div>zone</div>
			<div>height</div>
			<div>o.r.</div>
			<div>f.a.r.</div>
		</div>
	)
}

Header.displayName="Header";