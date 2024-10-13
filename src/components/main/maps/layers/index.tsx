// Layer imports
import { useParcels } from '../../../context/maps/layers/parcels';
import { useCircle } from '../../../context/maps/layers/circle';

// Third-party imports
import { useControl } from 'react-map-gl';
import { MapboxOverlay } from '@deck.gl/mapbox/typed';
import type { DeckProps } from '@deck.gl/core/typed';

const DeckGLOverlay = (props: DeckProps) => {
  const deck = useControl<any>(() => new MapboxOverlay(props));
  deck.setProps(props);
  return null;
}

export const Layers = () => {
	const { parcelsLayer } = useParcels();
	const { circleLayer } = useCircle();

	const layers = [ 
		circleLayer, 
		parcelsLayer,
	];

	return (
		<DeckGLOverlay layers={layers}/>
	)
}

Layers.displayName="Layers";