import React, { useState } from "react";

type NewMessageProps = {
  onSend: (message: string) => void;
};

const NewMessage: React.FC<NewMessageProps> = ({ onSend }) => {
  const [message, setMessage] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage(""); 
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Leave a message..."
        value={message}
        onChange={handleInputChange}
      />
      <button onClick={handleSend}>Send!</button>
    </div>
  );
};

export default NewMessage;
