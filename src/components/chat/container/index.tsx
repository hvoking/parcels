// App imports
import { processData } from './data';
import './styles.scss';

// Context imports
import { useChat } from 'context/chat';
import { useMask } from 'context/mask';

export const Container = ({ setResponseData, setUserQuery }: any) => {
	const { searchText, handleChange, onKeyDown, cleanSuggestions } = useChat();
	const { maskProperties } = useMask();

    const sendRequest = (currentText: any) => {
    	setResponseData((prev: any) => [...prev, { sender: "user", message: currentText }])
    	setUserQuery({question: currentText, knowledgeBase: "there are 3 cats and 4 dogs"});
    	cleanSuggestions();
	};

	return (
		<div className="chat-input-container">
			<textarea
				className="chat-input"
				placeholder="Type your message here..."
				value={searchText ? searchText : ""}
				onChange={handleChange}
				spellCheck={false}
				onKeyDown={onKeyDown}
			/>
			<button 
				className="chat-send-button" 
				onClick={() => sendRequest(searchText)}
			>
				Send
			</button>
		</div>
	)
}

Container.displayName="Container";