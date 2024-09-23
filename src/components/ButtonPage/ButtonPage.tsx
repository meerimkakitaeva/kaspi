import React from "react";
import { Link } from "react-router-dom";

const ButtonPage = () => {
  return (
    <div className="containerMobile">
      <Link to="/form" className="mainBtn">
        Налоговый вычет
      </Link>
    </div>
  );
};

export default ButtonPage;
