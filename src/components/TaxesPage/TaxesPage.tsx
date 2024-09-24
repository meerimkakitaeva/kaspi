import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import { Link, useNavigate } from "react-router-dom";
import arrowIcon from "../../assets/arrowLeft.svg";
import Button from "../UI/Button";
import { getFormData, getIncome } from "../../constants";

const TaxesPage = () => {
  const navigate = useNavigate();

  const [selectedCard, setSelectedCard] = useState({
    ipn: false,
    so: false,
    opv: false,
    vosms: false,
  });

  const [income, setIncome] = useState(0);
  const [ipn, setIpn] = useState(0);
  const [so, setSo] = useState(0);
  const [opv, setOpv] = useState(0);
  const [vosms, setVosms] = useState(0);

  const onCardClick = (card: string, selected: boolean) => {
    setSelectedCard((prevState) => ({
      ...prevState,
      [card]: selected,
    }));
  };

  const totalTaxes = () => {
    let total = 0;
    if (selectedCard.ipn) total += ipn;
    if (selectedCard.so) total += so;
    if (selectedCard.opv) total += opv;
    if (selectedCard.vosms) total += vosms;
    return total;
  };

  const resetData = () => {
    localStorage.removeItem("formData");
    localStorage.removeItem("taxesData");
  };

  const formData = getFormData();

  const onSend = () => {
    if (Object.values(selectedCard).some(Boolean)) {
      const total = totalTaxes();

      const taxesData = {
        ipn: selectedCard.ipn ? ipn : 0,
        so: selectedCard.so ? so : 0,
        opv: selectedCard.opv ? opv : 0,
        vosms: selectedCard.vosms ? vosms : 0,
        total: total,
      };

      localStorage.setItem("taxesData", JSON.stringify(taxesData));
      navigate("/final");
    }
  };

  useEffect(() => {
    const income = getIncome();

    setIncome(income);
    setIpn(Math.round(income * 0.03));
    setSo(Math.round(income * 0.035));
    setOpv(Math.round(income * 0.1));
    setVosms(Math.round(income * 0.05));

    if (!formData) {
      navigate("/");
    }
  }, [formData]);

  return (
    <div
      className="container"
      style={{ display: "flex", flexDirection: "column", maxWidth: "365px" }}
    >
      <Link
        style={{
          marginBottom: "23px",
          textDecoration: "none",
          color: "black",
        }}
        to="/form"
        onClick={resetData}
        className="general_titles"
      >
        <img
          src={arrowIcon}
          alt="arrow back"
          width="14"
          height="14"
          style={{ marginRight: "20px" }}
        />
        Заплатить налоги за ИП
      </Link>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3
          className="general_titles"
          style={{ marginTop: "35px", lineHeight: "22px", fontWeight: 500 }}
        >
          Ваш доход за <br /> полугодие:
        </h3>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h4 className="income">{Math.round(income)}</h4>
          <span
            className="income"
            style={{ fontStyle: "normal", marginLeft: "8px" }}
          >
            ₸
          </span>
        </div>
      </div>
      <Card
        number={ipn}
        name="ИПН"
        text="(3% от дохода)"
        selected={selectedCard.ipn}
        onSelect={(selected) => onCardClick("ipn", selected)}
      />
      <Card
        number={so}
        name="СО"
        text="(3.5% от дохода)"
        selected={selectedCard.so}
        onSelect={(selected) => onCardClick("so", selected)}
      />
      <Card
        number={opv}
        name="ОПВ"
        text="(10% от дохода)"
        selected={selectedCard.opv}
        onSelect={(selected) => onCardClick("opv", selected)}
      />
      <Card
        number={vosms}
        name="ВОСМС"
        text="(5% от дохода)"
        selected={selectedCard.vosms}
        onSelect={(selected) => onCardClick("vosms", selected)}
      />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3
          className="general_titles"
          style={{ marginTop: "35px", lineHeight: "22px", fontWeight: 500 }}
        >
          Итого к оплате за
          <br /> полугодие:
        </h3>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h4 className="income">{totalTaxes()}</h4>
          <span
            className="income"
            style={{ fontStyle: "normal", marginLeft: "8px" }}
          >
            ₸
          </span>
        </div>
      </div>

      <Button text="Оплатить" onClick={onSend} />
    </div>
  );
};

export default TaxesPage;
