import React from "react";
import ReactDOM from "react-dom/client";
import { LanguageProvider } from "../i18n/LanguageProvider";
import App from "./App";
import "../styles/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
);
