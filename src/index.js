import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { GeoProvider } from "./context/GeoContext.js";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
ReactDOM.render(
  <BrowserRouter>
    <GeoProvider>
      <Header />
      <App />
    </GeoProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
