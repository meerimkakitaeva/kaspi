import React, { useState } from "react";
import CheckBox from "./CheckBox";
import image from "../../assets/exclamationMark.svg";

interface Props {
  number: number;
  text: string;
  name: string;
  selected: boolean;
  onSelect: (selected: boolean) => void;
}

const Card: React.FC<Props> = ({ number, selected, name, text, onSelect }) => {
  const [isSelected, setIsSelected] = useState(selected);

  const handleSelect = (selected: boolean) => {
    setIsSelected(selected);
    onSelect(selected);
  };

  return (
    <div className="card">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="card_left">
          <CheckBox selected={isSelected} onSelect={handleSelect} />
        </div>
        <div className="card_right">
          <span style={{ fontSize: "24px" }}>{name}</span>
          <span style={{ fontSize: "12px", color: "#9D9D9D" }}>{text}</span>
        </div>
      </div>

      {isSelected && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <div className="card_number">
            <span>{number} ₸</span>
          </div>
          <div>
            <img src={image} alt="!" width="24" height="24" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
