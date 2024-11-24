import React from "react";

type ListProps = {
  id: number;
  message: string;
  isImportant: boolean;
  onHide: () => void;
  onToggleImportant: () => void;
  onDelete: () => void; // Add delete function prop
};

const List: React.FC<ListProps> = ({
  id,
  message,
  isImportant,
  onHide,
  onToggleImportant,
  onDelete, // Accept delete handler
}) => {
  return (
    <div
      data-testid="list-item"
      style={{
        padding: "12px",
        backgroundColor: isImportant ? "#FFEB3B" : "#F8BBD0",
        marginBottom: "10px",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <p
        style={{
          margin: 0,
          fontSize: "16px",
          fontWeight: "bold",
          color: isImportant ? "#212121" : "#4A4A4A",
        }}
      >
        {message}
      </p>
      <div style={{ marginTop: "10px" }}>
        <button
          data-testid="toggle-message"
          onClick={onHide}
          style={{
            padding: "8px 16px",
            fontSize: "14px",
            marginRight: "10px",
            borderRadius: "4px",
            backgroundColor: "#FF9800",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Hide
        </button>
        <button
          data-testid="toggle-important"
          onClick={onToggleImportant}
          style={{
            padding: "8px 16px",
            fontSize: "14px",
            borderRadius: "4px",
            backgroundColor: isImportant ? "#9E9E9E" : "#4CAF50",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          {isImportant ? "Unimportant" : "Important"}
        </button>
        <button
          onClick={onDelete}
          style={{
            padding: "8px 16px",
            fontSize: "14px",
            marginLeft: "10px",
            borderRadius: "4px",
            backgroundColor: "#F44336",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default List;
