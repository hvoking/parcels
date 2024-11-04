// React imports
import { useState, useRef } from 'react';

// App imports
import { SVGWrapper } from './svg';
import { Info } from './info';
import './styles.scss';

// Context imports
import { useCitiesApi } from '../../../context/api/cities';
import { useCitiesSizes } from '../../../context/sizes/cities';
import { useCircle } from '../../../context/filters/circle';

// Third-party imports
import * as d3 from 'd3';

export const Cities = () => {
	const svgContainerRef = useRef<any>(null);

	const { citiesData } = useCitiesApi();
	const { circleGeometry } = useCircle();
	const { innerWidth, innerHeight } = useCitiesSizes();
	
	if (!citiesData) return <></>

	const projection: any = d3.geoMercator()
		.fitSize([ innerWidth, innerHeight ], citiesData)

	const path = d3.geoPath(projection);

	return (
		<div className="cities">
			<div className="cities-title">Zone Regulations</div>
			<div style={{display: "grid", gridTemplateColumns: "1fr 1fr"}}>
				<SVGWrapper>
					<path
						fill="rgba(126, 126, 132, 0.4)"
						stroke="rgba(228, 228, 228, 1)" 
						strokeWidth={0.5}
						className="feature" 
						d={`${path(citiesData)}`}
					/>
				</SVGWrapper>
				<Info/>
			</div>
		</div>
	)
}

Cities.displayName="Cities";