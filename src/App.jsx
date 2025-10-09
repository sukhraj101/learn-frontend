// @flow

import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/Home";
import Pagereact from "./pages/Pagereact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="react" element={<Pagereact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;