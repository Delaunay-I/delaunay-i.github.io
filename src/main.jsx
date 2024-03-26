import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import Qrcode from "./components/projects/01/Qrcode.jsx";

import { HashRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/01-qrcode" Component={Qrcode} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
