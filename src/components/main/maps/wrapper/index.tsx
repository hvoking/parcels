// App imports
import { Basemaps } from './basemaps';
import './styles.scss';

export const Wrapper = ({ children }: any) => {
	return (
		<div className="map-wrapper">
			{children}
			<Basemaps/>
		</div>
	)
}

Wrapper.displayName="Wrapper";