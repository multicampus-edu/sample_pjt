
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>
);
