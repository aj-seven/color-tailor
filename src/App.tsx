import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import ColorToolPage from "./pages/ControlToolPage";
import Navbar from "./components/Navbar";
import ThemePreview from "./components/ThemePreview";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/get-started" element={<ColorToolPage />} />
        <Route path="/theme-showcase" element={<ThemePreview />} />
      </Routes>
    </>
  );
};

export default App;
