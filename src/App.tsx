import React from "react";
import { Route, Routes } from "react-router-dom";
import ButtonPage from "./components/ButtonPage/ButtonPage";
import ModalForm from "./components/ModalForm/ModalForm";
import TaxesPage from "./components/TaxesPage/TaxesPage";
import FinalPage from "./components/FinalPage/FinalPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ButtonPage />} />
        <Route path="/form" element={<ModalForm />} />
        <Route path="/taxes" element={<TaxesPage />} />
        <Route path="/final" element={<FinalPage />} />
        <Route path="*" element={<h1>Page not found!</h1>} />
      </Routes>
    </div>
  );
};

export default App;
