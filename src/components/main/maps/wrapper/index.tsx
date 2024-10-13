// App imports
import { Location } from './location';
import { BasemapsSelectors } from './basemaps';
import './styles.scss';

export const Wrapper = ({ children }: any) => {
	return (
		<div className="map-wrapper">
			{children}
			<BasemapsSelectors/>
			<Location/>
		</div>
	)
}

Wrapper.displayName="Wrapper";