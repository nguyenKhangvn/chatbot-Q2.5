import { useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [message, setMessage] = useState("");
  const [responsive, setResponsive] = useState("");

  const url = "http://127.0.0.1:8000/chat";

  const sendMessage = async () => {
    try {
      const res = await axios.post(url, {
        message: message,
      });
      setResponsive(res.data.response);
    }
    catch (error) {
      console.error("Error sending message:", error);
      setResponsive("An error occurred while sending the message.");
    }
  }


  return (
    <div className="chatbot-container">
      <h1>AI Chat Bot</h1>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message here..."
      />
      <button onClick={sendMessage}>Send</button>
     <div className="response">
      {responsive.split(/(?<=[.!?])\s+/).map((sentence, index) => {
        return <p key={index}>{sentence}</p>;
      })}
    </div>

    </div>
  )
}

export default App