import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import Qrcode from "./components/projects/01/Qrcode.jsx";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import SummaryComponent from "./components/projects/05-result-summary-component/SummaryComponent.jsx";
import InteractiveRating from "./components/projects/06-interactice-rating/InteractiveRating.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/01-qrcode" Component={Qrcode} />
        <Route path="/05-summary-component" Component={SummaryComponent} />
        <Route path="/06-interactive-rating" Component={InteractiveRating}/>
      </Routes>
    </HashRouter> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="01" element={<Qrcode />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
