import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import LoginJh from "./pages/jeonghoon/Login/Login";
import MainJh from "./pages/jeonghoon/Main/Main";

import LoginJy from "./pages/jiYook/Login/Login";
import MainJy from "./pages/jiYook/Main/Main";

import LoginKim from "./pages/kimminuk/Login/Login";
import MainKim from "./pages/kimminuk/Main/Main";

import LoginSm from "./pages/sangmin/Login/Login";
import MainSm from "./pages/sangmin/Main/Main";

import LoginSj from "./pages/sujin/Login/Login";
import MainSj from "./pages/sujin/Main/Main";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login-Jh" element={<LoginJh />} />
        <Route path="/main-Jh" element={<MainJh />} />

        <Route path="/login-Jy" element={<LoginJy />} />
        <Route path="/main-Jy" element={<MainJy />} />

        <Route path="/login-Kim" element={<LoginKim />} />
        <Route path="/main-Kim" element={<MainKim />} />

        <Route path="/login-Sm" element={<LoginSm />} />
        <Route path="/main-Sm" element={<MainSm />} />

        <Route path="/login-Sj" element={<LoginSj />} />
        <Route path="/main-Sj" element={<MainSj />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
