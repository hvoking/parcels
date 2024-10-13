// React imports
import { useCallback } from 'react';

// App imports
import { Pin } from './pin';
import { Controllers } from './controllers';
import { Wrapper } from './wrapper'
import { Tiles } from './tiles';
import { Avatar } from './avatar';
import { Mask } from './mask';

// Layers imports
import { Layers } from './layers';

// Context imports
import { useGeo } from '../../context/filters/geo';
import { useMouseEvents } from '../../context/maps/events';

// Third-party imports
import { Map } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export const Maps = () => {
  const { mapRef, basemap, viewport, setViewport } = useGeo();
  const { isDragging, onDragStart, onMouseMove, onDragEnd } = useMouseEvents();

  const onDblClick = useCallback((e: any) => {
    const lng = e.lngLat.lng;
    const lat = e.lngLat.lat;
    setViewport((prev: any) => ({...prev, longitude: lng, latitude: lat }));
  }, []); 

  return (
    <Wrapper>
      <Map
        ref={mapRef}
        mapStyle={basemap}
        initialViewState={viewport} 
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        doubleClickZoom={false}
        onDblClick={onDblClick}
        onMouseDown={onDragStart}
        onMouseMove={onMouseMove}
        onMouseUp={onDragEnd}
        onTouchStart={onDragStart}
        onTouchMove={onMouseMove}
        onTouchEnd={onDragEnd}
        dragPan={!isDragging}
      >
        <Layers/>
        <Controllers/>
        <Pin/>
        <Tiles/>
        <Avatar/>
        <Mask/>
      </Map>

    </Wrapper>
  );
}

Maps.displayName="Maps";