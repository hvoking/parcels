// React imports
import { useMemo } from 'react';

// Context imports
import { useMask } from '../../../context/maps/mask';
import { useParcelAreas } from '../../../context/filters/areas/parcel';
import { useBuiltAreas } from '../../../context/filters/areas/built';

// Third-party imports
import * as turf from '@turf/turf';
import { Source, Layer } from 'react-map-gl';

const hexToRgba = (() => {
  const cache = new Map();
  return (hex: any, opacity: any) => {
    const key = `${hex}-${opacity}`;
    if (cache.has(key)) return cache.get(key);

    if (hex) {
      hex = hex.replace(/^#/, '');
      const [r, g, b] = [0, 2, 4].map((offset: any) => parseInt(hex.substring(offset, offset + 2), 16));
      const rgba = `rgba(${r}, ${g}, ${b}, ${opacity})`;
      cache.set(key, rgba);
      return rgba;
    }
    return 'rgba(0, 0, 0, 0)';
  };
})();

export const Mask = () => {
  const { maskProperties } = useMask();
  const { parcelAreaFrom, parcelAreaTo } = useParcelAreas();
  const { builtAreaFrom, builtAreaTo } = useBuiltAreas();

  const geoJsonData = useMemo(() => {
    if (!maskProperties || maskProperties.length === 0) return null;

    const features = maskProperties.flatMap((maskProp: any) => {
      const baseGeometries = [];
      let { geometry, properties } = maskProp;
      const {
        area_carto, constructed_area = '', occupancy_rate = 1, plot_ratio_max = 1,
        height = 10, height_max = 50, front_setback = 4, colors = '#FFFFFF'
      } = properties;

      if (area_carto <= parcelAreaFrom || area_carto >= parcelAreaTo) return [];

      const constructedAreas = constructed_area.replace(/[{}]/g, '').split(',').map(Number);
      const sumConstructedArea = constructedAreas.reduce((sum: any, val: any) => sum + val, 0);

      if (sumConstructedArea < builtAreaFrom || sumConstructedArea > builtAreaTo) return [];

      const maxDensity = plot_ratio_max || 1;
      const baseHeight = height || 10;
      const maxExtrusionHeight = Math.min(height_max || 50, baseHeight * maxDensity * (occupancy_rate || 1));
      const extrusionSteps = 5;
      const stepHeight = maxExtrusionHeight / extrusionSteps;
      const setbackDistance = front_setback || 4;

      // Apply initial setback
      let currentGeometry = turf.buffer(geometry, -setbackDistance, { units: 'meters' });

      for (let i = 0; i < extrusionSteps; i++) {
        if (!currentGeometry || turf.area(currentGeometry) <= 0) break;

        const extrusionHeight = stepHeight * (i + 1);
        const color = hexToRgba(colors || '#FFFFFF', 1);

        baseGeometries.push({
          type: 'Feature',
          geometry: {
            type: 'Polygon',
            coordinates: currentGeometry.geometry.coordinates,
          },
          properties: {
            'zone-color': color,
            'extrusion-height': extrusionHeight,
          },
        });

        // Buffer the geometry inward for the next layer to simulate layering
        currentGeometry = turf.buffer(currentGeometry, -setbackDistance, { units: 'meters' });
      }

      return baseGeometries;
    });

    return features.length > 0 ? { type: 'FeatureCollection', features } : null;
  }, [maskProperties, parcelAreaFrom, parcelAreaTo, builtAreaFrom, builtAreaTo]);

  if (!geoJsonData) return null;

  return (
    <Source id="mask-buildings" type="geojson" data={geoJsonData}>
      <Layer
        id="extruded-buildings"
        type="fill-extrusion"
        paint={{
          'fill-extrusion-color': ['get', 'zone-color'],
          'fill-extrusion-base': 2,
          'fill-extrusion-height': ['get', 'extrusion-height'],
          'fill-extrusion-opacity': 0.8,
        }}
      />
    </Source>
  );
};

Mask.displayName = 'Mask';