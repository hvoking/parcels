// App imports
import { Location } from './location';
import { Basemaps } from './basemaps';
import './styles.scss';

export const Wrapper = ({ children }: any) => {
	return (
		<div className="map-wrapper">
			{children}
			<Basemaps/>
			<Location/>
		</div>
	)
}

Wrapper.displayName="Wrapper";