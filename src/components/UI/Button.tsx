import React from "react";

interface CustomButtonProps {
  text: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text }) => {
  return (
    <button className="custom-button" type="submit">
      {text}
    </button>
  );
};

export default CustomButton;