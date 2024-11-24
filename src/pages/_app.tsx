// src/App.tsx
import React from "react";
import GuestList from "../components/GuestList.tsx";

const App: React.FC = () => {
  const mockListItems = [
   
  ];

  return (
    <div>

      <GuestList listItem={mockListItems} />
    </div>
  );
};

export default App;
