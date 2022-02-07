import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
//import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AdhanParamProvider } from "./context/AdhanParamContext";
import { GeoProvider } from "./context/GeoContext.js";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GeoProvider>
        <AdhanParamProvider>
          <Header />
          <App />
        </AdhanParamProvider>
      </GeoProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
