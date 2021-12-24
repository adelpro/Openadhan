import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { GeoProvider } from "./context/GeoContext.js";

ReactDOM.render(
  <GeoProvider>
    <App />
  </GeoProvider>,
  document.getElementById("root")
);
