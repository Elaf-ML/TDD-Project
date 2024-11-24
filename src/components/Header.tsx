// Header.tsx
import React from "react";

const Header: React.FC = () => {
  return (
    <div style={{ backgroundColor: "rgb(33, 150, 243)", padding: "20px", color: "white", borderRadius: "8px 8px 0 0", marginBottom: "20px" }}>
      <h1 className="text-4xl font-bold text-pink-600 mb-2 tracking-wide">
        Guestbook
      </h1>
      <p style={{ fontSize: "16px", margin: "5px 0px" }}>
        Leave a message and interact with others.
      </p>
    </div>
  );
};

export default Header;
