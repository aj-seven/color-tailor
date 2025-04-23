import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import ColorToolPage from "./pages/ControlToolPage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/get-started" element={<ColorToolPage />} />
      </Routes>
    </>
  );
};

export default App;
