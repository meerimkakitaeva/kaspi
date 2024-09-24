import React from "react";

interface CustomButtonProps {
  text: string;
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, onClick }) => {
  return (
    <button className="custom-button" type="submit" onClick={onClick}>
      {text}
    </button>
  );
};

export default CustomButton;