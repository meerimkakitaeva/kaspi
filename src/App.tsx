import React from "react";
import { Route, Routes } from "react-router-dom";
import ButtonPage from "./components/ButtonPage/ButtonPage";
import "./components/ButtonPage/buttonPage.css";
import ModalForm from "./components/ModalForm/ModalForm";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ButtonPage />} />
        <Route path="/form" element={<ModalForm />} />
        <Route path="*" element={<h1>Page not found!</h1>} />
      </Routes>
    </div>
  );
};

export default App;
