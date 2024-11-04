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
import { useZonesApi } from '../../../context/api/zones';
import { useMapbox } from '../../../context/filters/mapbox';

// Third-party imports
import * as d3 from 'd3';

export const Cities = () => {
	const svgContainerRef = useRef<any>(null);

	const { citiesData } = useCitiesApi();
	const { zonesData } = useZonesApi();
	const { marker } = useMapbox();
	const { innerWidth, innerHeight } = useCitiesSizes();
	const { circleRadius } = useCircle();
	
	if (!citiesData || !zonesData) return <></>

	const projection: any = d3.geoMercator()
		.fitSize([ innerWidth, innerHeight ], citiesData)

	const path = d3.geoPath(projection);

	const smallCircle: any = d3.geoCircle()
	    .center([marker.longitude, marker.latitude])
	    .radius(circleRadius / 100);

	return (
		<div className="cities">
			<div className="cities-title">Zone Regulations</div>
			<div style={{display: "grid", gridTemplateColumns: "1fr 1fr"}}>
				<SVGWrapper>
					{zonesData.map((item: any, index: any) => {
						return (
							<path
								key={index}
								fill={item.zone != "ZRP" && item.zone != "ZRD" ? item.colors : "rgba(0, 0, 0, 0)"}
								stroke={`rgba(228, 228, 228, 0)`}
								strokeWidth={0}
								className="feature" 
								d={`${path(item.geom)}`}
							/>
						)})
					}
					<path
						fill="rgba(255, 0, 0, 0.6)"
						stroke="rgba(255, 0, 0, 1)"
						strokeWidth={0.6}
						className="feature" 
						d={`${path(smallCircle())}`}
					/>
				</SVGWrapper>
				<Info/>
			</div>
		</div>
	)
}

Cities.displayName="Cities";