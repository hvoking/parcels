// React imports
import { useEffect, useCallback } from 'react';

// App imports
import { Controllers } from './controllers';
import { Wrapper } from './wrapper'
import { Tiles } from './tiles';
import { Avatar } from './avatar';
import { Mask } from './mask';
import { Circle } from './circle';
import { Zones } from './zones';

// Context imports
import { useMapbox } from '../../context/filters/mapbox';
import { useEvents } from '../../context/maps/events';
import { useCircle } from '../../context/filters/circle';

// Third-party imports
import { Map } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export const Maps = () => {
  const { mapRef, basemap, viewport, setViewport } = useMapbox();
  const { isDragging, onDragStart, onMouseMove, onDragEnd } = useEvents();
  const { circleGeometry } = useCircle();

  const onDblClick = useCallback((e: any) => {
    const lng = e.lngLat.lng;
    const lat = e.lngLat.lat;
    setViewport((prev: any) => ({...prev, longitude: lng, latitude: lat }));
  }, []); 

  const onMapLoad = () => {
    const map = mapRef.current?.getMap();
    
    if (map) {
      map.addSource('eraser', {
        type: 'geojson',
        data: circleGeometry.geometry,
      });

      map.addLayer({
        id: 'eraser',
        type: 'clip',
        source: 'eraser',
        layout: {
          'clip-layer': ['building-extrusion']
        },
        minzoom: 14
      });
    }
  };

useEffect(() => {
    const map = mapRef.current?.getMap();
    if (map && map.getSource('eraser')) {
      map.getSource('eraser').setData(circleGeometry.geometry);
    }
  }, [ circleGeometry ]);

  return (
    <Wrapper>
      <Map
        ref={mapRef}
        mapStyle={basemap}
        initialViewState={viewport} 
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onLoad={onMapLoad}
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
        <Controllers/>
        <Circle/>
        <Tiles/>
        <Avatar/>
        <Mask/>
        <Zones/>
      </Map>

    </Wrapper>
  );
}

Maps.displayName="Maps";