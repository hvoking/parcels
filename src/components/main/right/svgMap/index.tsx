// React imports
import { useRef } from 'react';

// App imports
import { SVGWrapper } from './svg';
import './styles.scss';

// Context imports
import { useSvgMapSizes } from '../../../context/sizes/svgMap';
import { useMapbox } from '../../../context/filters/mapbox';

// Third-party imports
import * as d3 from 'd3';

export const SvgMap = () => {
	const svgContainerRef = useRef<any>(null);

	const polygonData = null;
	const { innerWidth, innerHeight } = useSvgMapSizes();
	
	const { setViewport } = useMapbox();

	if (!polygonData) return (<></>)

	const city = polygonData;

	const projection = d3.geoIdentity()
		.reflectY(true)
		.fitSize([ innerWidth, innerHeight ], city)

	const path = d3.geoPath(projection);

	const onClick = (e: any) => {
		const rect = svgContainerRef.current.getBoundingClientRect();
		const adjustedCoordinates: any = [e.clientX - rect.left, e.clientY - rect.top];
	    const [ lng, lat ]: any = projection.invert(adjustedCoordinates);
	    setViewport((prev: any) => ({...prev, latitude: lat, longitude: lng }));
	}

	return (
		<div className="svgmap-wrapper">
			<div ref={svgContainerRef}>
				<SVGWrapper>
					<g>
						<path
							onClick={onClick}
							fill="rgba(126, 126, 132, 0.4)"
							stroke="rgba(255, 255, 255, 1)" 
							strokeWidth={0.5}
							className="feature" 
							d={`${path(city)}`}
						/>
					</g>
				</SVGWrapper>
			</div>
		</div>
	)
}

SvgMap.displayName="SvgMap";