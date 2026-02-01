import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "cally";
import "react-toastify/dist/ReactToastify.css";
import { AuthContextProvider } from "./context/AuthContext";
import { VehicleContextProvider } from "./context/VehicleContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <VehicleContextProvider>
        <App />
      </VehicleContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
);
