// App imports
import './styles.scss';

// Context imports
import { useMapbox } from '../../../../context/filters/mapbox';

export const Basemaps = () => {
	const { basemap, setBasemap } = useMapbox();

	const onClick = () => {
		basemap === "mapbox://styles/hvoking/clrwzn1jo015q01nl53664m2c" ?
		setBasemap("mapbox://styles/mapbox/satellite-v9") :
		setBasemap("mapbox://styles/hvoking/clrwzn1jo015q01nl53664m2c")
	}

	return (
		<div className="basemaps-wrapper">
			<img 
				className="basemaps-image"
				src={process.env.PUBLIC_URL + "/static/icons/globe.svg"}
				alt="globe"
				onClick={onClick}
			/>
		</div>
	)
}

Basemaps.displayName="Basemaps";