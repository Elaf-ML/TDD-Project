import React, { useState } from 'react';
import GuestList from './GuestList.tsx';
import NewMessage from './NewMessage.tsx';

interface Message {
  id: number;
  message: string;
}

const MessagingApp: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, message: 'First message' },
    { id: 2, message: 'Second message' }
  ]);

  const handleSend = (newMessage: string) => {
    const newId = messages.length ? messages[messages.length - 1].id + 1 : 1;
    setMessages([...messages, { id: newId, message: newMessage }]);
  };

  return (
    <div>
      <GuestList listItem={messages} />
      <NewMessage onSend={handleSend} />
    </div>
  );
};

export default MessagingApp;
