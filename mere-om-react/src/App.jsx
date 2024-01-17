import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Timer } from "./Pages/Timer/Timer";
import { NavBar } from "./components/NavBar/NavBar";

import "./App.scss";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Timer" element={<Timer />} />
      </Routes>
    </>
  );
}
export default App;
