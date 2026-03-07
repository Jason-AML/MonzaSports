import React from "react";
import ReactDOM from "react-dom/client";
import "./i18n/index.js";
import App from "./App";
import "./index.css";
import "cally";
import "react-toastify/dist/ReactToastify.css";
import "@fontsource/space-grotesk";
import "material-symbols/outlined.css";
import { AuthContextProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>,
);
