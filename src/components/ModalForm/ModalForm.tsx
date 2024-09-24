import React, { FormEvent, useState } from "react";
import { ICalculate } from "../../types";
import TextField from "../UI/Textfield";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";

const ModalForm = () => {
  const [state, setState] = useState<ICalculate>({
    name: "",
    surname: "",
    iin: "",
    taxation: "Упрощенный",
    income: 1,
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const taxationCategories = ["Упрощенный", "Общеустановленный"];
  const inputChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    let allFields = true;
    const newErrors: { [key: string]: string } = {};

    if (state.iin.length !== 12) {
      newErrors.iin = "ИИН должен содержать 12 цифр";
      allFields = false;
    }

    if (
      isNaN(state.income) ||
      state.income <= 0 ||
      state.income > 150000000 ||
      String(state.income).startsWith("0")
    ) {
      newErrors.income = "Доход должен быть больше 0 и не больше 150 000 000";
      allFields = false;
    }

    if (allFields) {
      localStorage.setItem("formData", JSON.stringify(state));
      console.log("Данные сохранены в localStorage:", state);
      navigate("/taxes");
      setErrors({});
    } else {
      setErrors(newErrors);
    }
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
      <form className="input_wrapp" onSubmit={onSubmit}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <TextField
              id="name"
              label="Имя"
              placeholder="Имя"
              value={state.name}
              name="name"
              onChange={inputChangeHandler}
              required={true}
            />
          </div>
          <div>
            <TextField
              id="surname"
              label="Фамилия"
              placeholder="Фамилия"
              value={state.surname}
              name="surname"
              onChange={inputChangeHandler}
              required={true}
            />
          </div>
        </div>

        <div>
          {errors.iin && <p style={{ color: "red" }}>{errors.iin}</p>}
          <TextField
            id="iin"
            label="ИИН"
            placeholder="ИИН"
            value={state.iin}
            name="iin"
            onChange={inputChangeHandler}
            onKeyPress={onKeyPress}
            required={true}
          />
        </div>

        <div>
          <TextField
            id="taxation"
            label="Режим налогообложения"
            placeholder=""
            value={state.taxation}
            name="taxation"
            onChange={inputChangeHandler}
            options={taxationCategories}
            required={true}
          />
        </div>

        <div>
          {errors.income && <p style={{ color: "red" }}>{errors.income}</p>}
          <TextField
            id="income"
            label="Ваш доход за пол года"
            type="number"
            placeholder="Введите доход"
            value={state.income}
            name="income"
            onChange={inputChangeHandler}
            required={true}
          />
        </div>

        <div style={{ margin: "86px 0" }}>
          <Button text="Рассчитать" />
        </div>
      </form>
    </div>
  );
};

export default ModalForm;
