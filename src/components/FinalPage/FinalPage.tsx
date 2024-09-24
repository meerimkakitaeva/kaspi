import React, { useEffect, useState } from "react";
import doneIcon from "../../assets/doneIcon.svg";
import { ICalculate } from "../../types";

const FinalPage = () => {
  const [state, setState] = useState<ICalculate>({
    name: "",
    surname: "",
    iin: "",
    taxation: "Упрощенный",
    income: 1,
  });

  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setState(JSON.parse(savedData));
    }
  }, []);

  return (
    <div
      className="container"
      style={{ display: "flex", flexDirection: "column", maxWidth: "365px" }}
    >
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "80px",
        }}
      >
        <div className="final_title">Спасибо!</div>
        <div className="final_title">Налоги успешно оплачены!</div>
        <img
          src={doneIcon}
          alt="done"
          style={{ width: "50px", height: "50px" }}
        />
      </div>
      {/*<div style={{fontStyle: "italic"}}>*/}
      {/*  <div style={{display: "flex", justifyContent: "space-between", marginBottom: "10px"}}>*/}
      {/*    <div>Имя</div>*/}
      {/*    <div>{state.name}</div>*/}
      {/*  </div>*/}
      {/*  <div style={{display: "flex", justifyContent: "space-between", marginBottom: "10px"}}>*/}
      {/*    <div>Фамилия</div>*/}
      {/*    <div>{state.surname}</div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
};

export default FinalPage;
