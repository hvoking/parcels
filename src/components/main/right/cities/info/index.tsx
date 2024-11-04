// App imports
import './styles.scss';

// Context imports
import { useReverseGeocodingApi } from '../../../../context/api/google/reverse';

export const Info = () => {
	const { currentAddress } = useReverseGeocodingApi();

	if (!currentAddress) return <div></div>

	const city = currentAddress[3].long_name;
	const neighbour = currentAddress[2].long_name;
	const state = currentAddress[4].long_name;
	const postal = currentAddress[6] && currentAddress[6].long_name;

	return (
		<div className="zone-info-wrapper">
			<div>
				<div style={{color: "rgba(255, 255, 255, 0.8)"}}>City</div>
				<div>{city}</div>
			</div>
			<div>
				<div style={{color: "rgba(255, 255, 255, 0.8)"}}>Neighbour</div>
				<div>{neighbour}</div>
			</div>
			<div>
				<div style={{color: "rgba(255, 255, 255, 0.8)"}}>State</div>
				<div>{state}</div>
			</div>
			{currentAddress[6] && 
				<div>
					<div style={{color: "rgba(255, 255, 255, 0.8)"}}>Postal Code</div>
					<div>{postal}</div>
				</div>
			}
		</div>
	)
}