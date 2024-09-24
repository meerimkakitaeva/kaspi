import React, { useState } from "react";

interface Props {
  selected: boolean;
  onSelect: (isSelected: boolean) => void;
}

const CheckBox: React.FC<Props> = ({ selected, onSelect }) => {
  const [isSelected, setIsSelected] = useState(selected);

  const onClick = () => {
    const newSelection = !isSelected;
    setIsSelected(newSelection);
    onSelect(newSelection);
  };

  return (
    <div
      onClick={onClick}
      style={{
        width: "25px",
        height: "25px",
        borderRadius: "50%",
        backgroundColor: isSelected ? "black" : "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid black",
        cursor: "pointer",
      }}
    >
      {isSelected && (
        <span
          style={{
            color: "white",
            fontSize: "15px",
          }}
        >
          ✓
        </span>
      )}
    </div>
  );
};

export default CheckBox;
