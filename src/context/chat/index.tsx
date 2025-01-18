// React imports
import { useState, useContext, createContext } from 'react';

const ChatContext: React.Context<any> = createContext(null);

export const useChat = () => useContext(ChatContext)

export const ChatProvider = ({children}: any) => {
	const [ searchText, setSearchText ] = useState<any>(null);
	
	const handleChange = (e: any) => {
		const query = e.target.value;
		setSearchText(query);
	};

	const cleanSuggestions = () => {
		setSearchText("");
	}

	const onKeyDown = (e: any) => {
		// scape
		if (e.keyCode === 27) {
			setSearchText("");
		}
	};

	return (
		<ChatContext.Provider value={{
			searchText, handleChange, cleanSuggestions, onKeyDown,
		}}>
			{children}
		</ChatContext.Provider>
	)
}

ChatContext.displayName = "ChatContext";