import { useState } from "react";
import Home from "./views/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountryDetails from "./components/CountryDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="country/:id" element={<CountryDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
