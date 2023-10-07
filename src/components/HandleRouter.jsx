import React from "react";
import { Route, Routes } from "react-router-dom";
import Mainpage from "../pages/Mainpage";
import Main from "../pages/hangman/Main";

export default function HandleRouter() {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />}></Route>
      <Route path="/hangman" element={<Main />}></Route>
    </Routes>
  );
}
