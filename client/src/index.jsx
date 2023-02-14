import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";

import SideBar from "./components/sidebar/SideBar";
import Home from "./components/home/Home";
import Articles from "./components/articles/Articles";
import Factories from "./components/factories/Factories";
import Ships from "./components/ships/Ships";
import Shippers from "./components/shippers/Shippers";
import Admin from "./components/admin/Admin";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artigos" element={<Articles />} />
        <Route path="/fabricas" element={<Factories />} />
        <Route path="/entregas" element={<Ships />} />
        <Route path="/entregadores" element={<Shippers />} />
        <Route path="/administrador" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
