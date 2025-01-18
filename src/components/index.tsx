// React imports
import { useState } from 'react';

// App imports
import { Tiles } from './tiles';
import { Circle } from './circle';
import { Mask } from './mask';
import { Navigation } from './nav';
import { Avatar } from './avatar';
import { Segments } from './segments';
import { Chat } from './chat';
import './styles.scss';

// Context imports
import { useMapProperties } from 'context/maps/properties';
import { useMapEvents } from 'context/maps/events';

// Third-party imports
import 'mapbox-gl/dist/mapbox-gl.css';
import { Map } from 'react-map-gl';

export const Main = () => {
	const { viewport, mapRef, mapStyle } = useMapProperties();
    const { isDragging, onDragStart, onMouseMove, onDragEnd } = useMapEvents();

    const [ chatCoords, setChatCoords ] = useState<any>(null);

	return (
		<div className="main">
			<div className="map-container">
				<Map
					ref={mapRef}
					initialViewState={viewport}
					mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN} 
					mapStyle={mapStyle}
					onMouseDown={onDragStart}
	                onMouseMove={onMouseMove}
	                onMouseUp={onDragEnd}
	                onTouchStart={onDragStart}
	                onTouchMove={onMouseMove}
	                onTouchEnd={onDragEnd}
	                dragPan={!isDragging}
	                onClick={(e: any) => {setChatCoords(e.lngLat)}}
				>		
					<Segments/>
					<Tiles/>
					<Circle/>
					<Mask/>
					<Navigation/>
					<Avatar/>
					{chatCoords && <Chat coords={chatCoords}/>}
				</Map>
			</div>
		</div>
	)
}

Main.displayName="Main";