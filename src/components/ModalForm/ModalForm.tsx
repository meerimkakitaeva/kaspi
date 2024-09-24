import React, { useState } from "react";
import { ICalculate } from "../../types";
import TextField from "../UI/Textfield";

const ModalForm = () => {
  const [state, setState] = useState<ICalculate>({
    name: "",
    surname: "",
    iin: "",
    taxation: "Упрощенный",
    income: 0,
  });

  const taxationCategories = ["Упрощенный", "Общеустановленный"];

  const inputChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  return (
    <div
      className="container"
      style={{ display: "flex", flexDirection: "column", maxWidth: "365px" }}
    >
      <h4
        style={{
          lineHeight: "40px",
          fontSize: "24px",
          marginTop: "40px",
          fontStyle: "italic",
          marginBottom: "23px",
        }}
      >
        Заплатить налоги за ИП
      </h4>
      <p style={{ margin: "0 0 15px 0" }}>
        Теперь ИП на упрощенке обязан уплачивать за себя ИПН и социальный налог.
        В связи с этими изменениями ИП должен платить за себя:
      </p>
      <div className="input_wrapp">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <TextField
            id="name"
            label="Имя"
            placeholder="Имя"
            value={state.name}
            name="name"
            onChange={inputChangeHandler}
          />
          <TextField
            id="surname"
            label="Фамилия"
            placeholder="Фамилия"
            value={state.surname}
            name="surname"
            onChange={inputChangeHandler}
          />
        </div>

        <TextField
          id="iin"
          label="ИИН"
          placeholder="ИИН"
          value={state.iin}
          name="iin"
          onChange={inputChangeHandler}
        />

        <TextField
          id="taxation"
          label="Режим налогообложения"
          placeholder=""
          value={state.taxation}
          name="taxation"
          onChange={inputChangeHandler}
          options={taxationCategories}
        />

        <TextField
          id="income"
          label="Ваш доход за пол года"
          type="number"
          placeholder="Введите доход"
          value={state.income}
          name="income"
          onChange={inputChangeHandler}
        />
      </div>
    </div>
  );
};

export default ModalForm;
