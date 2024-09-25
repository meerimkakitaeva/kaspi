import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./containers/HomePage/HomePage";
import FormPage from "./containers/FormPage/FormPage";
import TaxesPage from "./containers/TaxesPage/TaxesPage";
import FinalPage from "./containers/FinalPage/FinalPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/taxes" element={<TaxesPage />} />
        <Route path="/final" element={<FinalPage />} />
        <Route
          path="*"
          element={
            <div className="container container_inner">
              <h1>Page not found!</h1>
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
