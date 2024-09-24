import React from "react";
import Card from "../UI/Card";

const TaxesPage = () => {
  const formData = JSON.parse(localStorage.getItem("formData") || "{}");

  const income = parseFloat(formData.income);
  const ipn = Math.round(income * 0.03);
  const so = Math.round(income * 0.035);
  const opv = Math.round(income * 0.1);
  const vosms = Math.round(income * 0.05);
  console.log(localStorage.getItem("formData"));

  return (
    <div
      className="container"
      style={{ display: "flex", flexDirection: "column", maxWidth: "365px" }}
    >
      <h4>{Math.round(income)}</h4>
      <Card number={ipn} name="ИПН" text="(3% от дохода)" selected={false} />
      <Card number={so} name="СО" text="(3.5% от дохода)" selected={false} />
      <Card number={opv} name="ОПВ" text="(10% от дохода)" selected={false} />
      <Card
        number={vosms}
        name="ВОСМС"
        text="(5% от дохода)"
        selected={false}
      />
    </div>
  );
};

export default TaxesPage;
