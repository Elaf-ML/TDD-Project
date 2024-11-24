import React, { useState } from "react";
import { ListType } from "../utils/types";
import List from "./List.tsx";
import Header from "../components/Header.tsx";

type GuestListProps = {
  listItem: ListType[];
};

const GuestList: React.FC<GuestListProps> = ({ listItem }) => {
  const [messages, setMessages] = useState<ListType[]>(
    listItem.map((item) => ({
      ...item,
      isImportant: item.isImportant ?? false, // Initialize isImportant if not provided
      isVisible: item.isVisible ?? true, // Initialize isVisible if not provided
    }))
  );
  const [input, setInput] = useState<string>("");
  const [showAllMessages, setShowAllMessages] = useState<boolean>(false); // Track if we want to show all messages

  const handleSendMessage = () => {
    if (input.trim() === "") return;
    setMessages([
      ...messages,
      { id: messages.length + 1, message: input, isImportant: false, isVisible: true },
    ]);
    setInput(""); // Reset input after sending
  };

  const handleHideMessage = (id: number) => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === id ? { ...msg, isVisible: !msg.isVisible } : msg
      )
    );
  };

  const handleToggleImportant = (id: number) => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === id ? { ...msg, isImportant: !msg.isImportant } : msg
      )
    );
  };

  const handleDeleteMessage = (id: number) => {
    setMessages((prev) => prev.filter((msg) => msg.id !== id));
  };

  const handleShowAllMessages = () => {
    setShowAllMessages(!showAllMessages); // Toggle visibility of all hidden messages
    setMessages((prev) =>
      prev.map((msg) => ({
        ...msg,
        isVisible: !showAllMessages, // Set all messages to visible when showAllMessages is true
      }))
    );
  };

  return (
    <div
      data-testid="guest-list"
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        backgroundColor: "#f4f4f4",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Header />
      {/* Display all messages */}
      <div style={{ marginBottom: "20px" }}>
        {messages.map((message) =>
          message.isVisible ? (
            <List
              key={message.id}
              id={message.id}
              message={message.message}
              isImportant={message.isImportant}
              onHide={() => handleHideMessage(message.id)}
              onToggleImportant={() => handleToggleImportant(message.id)}
              onDelete={() => handleDeleteMessage(message.id)} // Pass delete handler
            />
          ) : null
        )}
      </div>

      {/* Input field for new messages */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Leave a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            marginBottom: "10px",
          }}
        />
        <button
          onClick={handleSendMessage}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "4px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            cursor: "pointer",
            width: "100%",
          }}
        >
          Send!
        </button>
      </div>

      {/* Show All button */}
      <button
        onClick={handleShowAllMessages}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "4px",
          backgroundColor: showAllMessages ? "#FF5722" : "#2196F3",
          color: "white",
          border: "none",
          cursor: "pointer",
          width: "100%",
        }}
      >
        {showAllMessages ? "Hide All" : "Show All"}
      </button>
    </div>
  );
};

export default GuestList;
