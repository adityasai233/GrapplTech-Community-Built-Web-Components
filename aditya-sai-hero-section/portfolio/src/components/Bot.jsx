import React, { useState } from "react";

const Bot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const toggleChat = () => setIsChatOpen(!isChatOpen);

  const handleInputChange = (e) => setInput(e.target.value);

  const handleSendMessage = () => {
    if (input.trim() === "") return;
    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    const userMessage = input.toLowerCase();
    setInput(""); 
    setTimeout(() => {
      const botResponse = getBotResponse(userMessage); 
      setMessages([...newMessages, { text: botResponse, sender: "bot" }]);
    }, 1000);
  };
  const getBotResponse = (message) => {
    if (message.includes("hello") || message.includes("hi")) {
      return "Hello! How can I assist you today?";
    } else if (message.includes("how are you")) {
      return "I'm just a bot, but I'm doing well! How about you?";
    } else if (message.includes("what is your name")) {
      return "I'm your friendly chatbot!";
    } else if (message.includes("help")) {
      return "Sure! Ask me anything about this website or any general question.";
    } else if (message.includes("bye") || message.includes("goodbye")) {
      return "Goodbye! Have a great day!";
    } else {
      return "I'm sorry, I don't understand that. Can you try rephrasing?";
    }
  };

  return (
    <div>
      <div
        onClick={toggleChat}
        style={{
          position: 'fixed',
          bottom: '1rem',
          right: '1rem',
          zIndex: 999,
          cursor: 'pointer',
          backgroundColor: '#0d6efd',
          color: 'white',
          width: '4rem',
          height: '4rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          fontSize: '2rem',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          transition: 'background-color 0.3s, transform 0.3s',
          transform: isChatOpen ? 'scale(1.1)' : 'scale(1)',
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0b5ed7')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#0d6efd')}
      >
        <ion-icon name="chatbubbles-outline"></ion-icon>
      </div>
      {isChatOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '5rem',
            right: '1rem',
            width: '350px',
            height: '450px',
            backgroundColor: '#212529',
            border: '1px solid #343a40',
            borderRadius: '10px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          <div style={{ flex: 1, padding: '10px', overflowY: 'auto', backgroundColor: '#343a40' }}>
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  marginBottom: '10px',
                  textAlign: msg.sender === 'user' ? 'right' : 'left',
                }}
              >
                <div
                  style={{
                    display: 'inline-block',
                    padding: '10px',
                    borderRadius: '12px',
                    backgroundColor: msg.sender === 'user' ? '#0d6efd' : '#6c757d',
                    color: 'white',
                    maxWidth: '70%',
                    wordBreak: 'break-word',
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <div style={{ padding: '10px', borderTop: '1px solid #343a40', backgroundColor: '#495057' }}>
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              style={{
                width: 'calc(100% - 80px)',
                padding: '10px',
                borderRadius: '4px',
                border: '1px solid #6c757d',
                backgroundColor: '#495057',
                color: 'white',
                marginRight: '10px',
                outline: 'none',
                boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)',
              }}
            />
            <button
              onClick={handleSendMessage}
              style={{
                padding: '10px 20px',
                borderRadius: '4px',
                border: 'none',
                backgroundColor: '#0d6efd',
                color: 'white',
                cursor: 'pointer',
                fontSize: '1rem',
                transition: 'background-color 0.3s',
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0b5ed7')}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#0d6efd')}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bot;
