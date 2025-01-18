// React imports
import { useContext, createContext } from 'react';

const BedrockApiContext: React.Context<any> = createContext(null)

export const useBedrockApi = () => useContext(BedrockApiContext)

export const BedrockApiProvider = ({children}: any) => {
	
	const fetchBedrock = async ({ question, knowledgeBase }: any) => {
		const res = await fetch(`${process.env.REACT_APP_API_URL}/bedrock/`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				question: JSON.stringify(question),
				knowledge_base: JSON.stringify(knowledgeBase),
			}),
		});
		const receivedData = await res.json();
		return receivedData;
	}

	return (
		<BedrockApiContext.Provider value={{ fetchBedrock }}>
			{children}
		</BedrockApiContext.Provider>
	)
}

BedrockApiContext.displayName = "BedrockApiContext";