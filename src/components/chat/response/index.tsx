// App imports
import './styles.scss';

export const Response = ({ responseData }: any) => {
  const messages = responseData || [];

  return (
    <div className="chat-history">
      {messages.map((msg: any, index: any) => (
        <div
          key={index}
          className={`chat-message ${msg.sender === 'assistant' ? 'assistant' : 'user'}`}
        >
          {msg.message}
        </div>
      ))}
    </div>
  );
};

Response.displayName = 'Response';