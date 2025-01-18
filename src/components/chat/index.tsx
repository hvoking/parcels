// React imports
import { useState, useEffect } from 'react';

// App imports
import { Response } from './response';
import { Container } from './container';
import './styles.scss';

// Context imports
import { useBedrockApi } from 'context/bedrock';

// Third-party imports
import { Popup } from 'react-map-gl';

export const Chat = ({ coords }: any) => {
	const { lng, lat } = coords;

    // Context hooks
    const { fetchBedrock } = useBedrockApi();

    // Refs and state
    const [ useQuery, setUserQuery ] = useState<any>(null);
    const [ responseData, setResponseData ] = useState<any>([]);

	useEffect(() => {
		const fetchBedrockModel = async () => {
			const response = await fetchBedrock(useQuery);
			
			const message = response
			  .filter((item: any) => item.content && item.content.document)
			  .map((item: any) => item.content.document);
			
			setResponseData((prev: any) => [...prev, { sender: "assistant", message: message }])
		};

		useQuery && fetchBedrockModel();
	}, [ useQuery ]);

	return (
		<Popup 
			longitude={lng} 
			latitude={lat} 
			closeButton={false}
			anchor="top"
		>
			<div className="chat-interface">
				<div className="chat-header">Ask Agent</div>
				<Response responseData={responseData} />
				<Container setResponseData={setResponseData} setUserQuery={setUserQuery}/>
			</div>
		</Popup>
	)
}

Chat.displayName="Chat";