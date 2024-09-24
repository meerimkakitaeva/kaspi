import React, { useEffect, useState } from "react";
import doneIcon from "../../assets/doneIcon.svg";
import { ICalculate } from "../../types";
import List from "../UI/List";
import { Link } from "react-router-dom";

const FinalPage: React.FC = () => {
  const [state, setState] = useState<ICalculate>({
    name: "",
    surname: "",
    iin: "",
    taxation: "Упрощенный",
    income: 1,
  });

  const [taxesData, setTaxesData] = useState<any>(null);
  const totalTaxes = localStorage.getItem("totalTaxes");

  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    const taxesData = localStorage.getItem("taxesData");

    if (savedData) {
      setState(JSON.parse(savedData));
    }

    if (taxesData) {
      const parsedTaxesData = JSON.parse(taxesData);

      const filteredTaxesData = Object.fromEntries(
        Object.entries(parsedTaxesData).filter(([key, value]) => value !== 0),
      );

      setTaxesData(filteredTaxesData);
    }
  }, []);

  const details = [
    { label: "Имя", value: state.name },
    { label: "Фамилия", value: state.surname },
    { label: "ИИН", value: state.iin },
    { label: "Режим налогоблажения", value: state.taxation },
    { label: "Ваш доход за пол года", value: `${state.income} ₸` },
  ];

  const onClick = () => {
    localStorage.clear();
  };

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

      <div style={{ fontStyle: "italic", fontWeight: "600" }}>
        {details.map((item, index) => (
          <List key={index} label={item.label} value={item.value} />
        ))}

        <div style={{ marginBottom: "80px" }}>
          {taxesData && (
            <div>
              {Object.entries(taxesData).map(([key, value], index) => (
                <List
                  key={index}
                  label={key.toUpperCase()}
                  value={`${value} ₸`}
                />
              ))}
            </div>
          )}
        </div>

        <List
          label="Итого оплачено за  полугодие:"
          value={`${String(totalTaxes)} ₸`}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "80px",
          }}
        >
          <Link
            to="/"
            style={{ textDecoration: "none", color: "black", fontSize: "20px" }}
            onClick={onClick}
          >
            Вернуться на главную
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FinalPage;
