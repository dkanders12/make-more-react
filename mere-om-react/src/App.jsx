import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Timer } from "./Pages/Timer/Timer";
import { Cart } from "./Pages/Cart/Cart.add";
import { NavBar } from "./components/NavBar/NavBar";

import "./App.scss";
import { Fetch } from "./Pages/Fetch/Fetch";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Timer" element={<Timer />} />
        <Route path="/Fetch" element={<Fetch />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </>
  );
}
export default App;
