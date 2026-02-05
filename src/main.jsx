import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// 1. KEEP this line (it fixes the rest of your site)
import "./styles/global.css"; 

// 2. ADD this line (it fixes the Academy page UI)
import "./index.css"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);