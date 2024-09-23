import React, { useState } from "react";
import { ICalculate } from "../../types";

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
      style={{ display: "flex", flexDirection: "column", maxWidth: "420px" }}
    >
      <h4 style={{ lineHeight: "40px", fontSize: "24px", marginTop: "50px" }}>
        Заплатить налоги за ИП
      </h4>
      <p style={{ margin: "0 0 8px 0", padding: "0px 40px 0px 0px" }}>
        Теперь ИП на упрощенке обязан уплачивать за себя ИПН и социальный налог.
        В связи с этими изменениями ИП должен платить за себя:
      </p>
      <div className="input_wrapp">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="input_container">
            <label htmlFor="name" className="label">
              Имя
            </label>
            <input
              type="text"
              id="name"
              placeholder="Имя"
              value={state.name}
              onChange={inputChangeHandler}
              name="name"
            />
          </div>

          <div className="input_container">
            <label htmlFor="surname" className="label">
              Фамилия
            </label>
            <input
              type="text"
              id="surname"
              placeholder="Фамилия"
              value={state.surname}
              onChange={inputChangeHandler}
              name="surname"
            />
          </div>
        </div>

        <div
          className="input_container"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <label htmlFor="iin" className="label">
            ИИН
          </label>
          <input
            type="text"
            id="iin"
            placeholder="ИИН"
            value={state.iin}
            onChange={inputChangeHandler}
            name="iin"
          />
        </div>

        <div
          className="input_container"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <label htmlFor="taxation" className="label">
            Режим налогообложения
          </label>
          <select
            id="taxation"
            value={state.taxation}
            onChange={inputChangeHandler}
            name="taxation"
          >
            {taxationCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div
          className="input_container"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <label htmlFor="income" className="label">
            Ваш доход за пол года
          </label>
          <input
            type="number"
            id="income"
            placeholder="Введите доход"
            value={state.income}
            onChange={inputChangeHandler}
            name="income"
          />
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
