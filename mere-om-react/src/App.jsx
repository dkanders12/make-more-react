import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Timer } from "./Pages/Timer/Timer";
import { Cart } from "./Pages/Cart/Cart.add";
import { SupaPages } from "./Pages/SupabasePages/SupaPages";
import { Fetch } from "./Pages/Fetch/Fetch";
import { SubaSignup } from "./Pages/SignupSuba/SubaSignup";
import { NavBar } from "./components/NavBar/NavBar";
import "./App.scss";
import Hygraph from "./components/Hygraph/Hygraph";
import LoginForm from "./components/Supabase/Login/Login";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Timer" element={<Timer />} />
        <Route path="/Fetch" element={<Fetch />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Supabase" element={<SupaPages />} />
        <Route path="/SubaSignup" element={<SubaSignup />} />
        <Route path="/Hygraph" element={<Hygraph />} />
        <Route path="/LoginSupa" element={<LoginForm />} />
      </Routes>
    </>
  );
}
export default App;
