// @flow

import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/home/Home";
import Skill from "./pages/skill/skill";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="react" element={<Skill />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;