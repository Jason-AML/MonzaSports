import { useContext } from "react";

import { createContext } from "react";
import { Outlet } from "react-router-dom";
import { useDataVehicle } from "../hooks/useDataVehicle";

export const VehicleContext = createContext();
export const useVehicle = () => {
  const context = useContext(VehicleContext);
  if (!context) throw new Error("No hay contexto");
  return context;
};

export const VehicleContextProvider = ({ children }) => {
  const value = useDataVehicle();

  return (
    <VehicleContext.Provider value={value}>
      {children ?? <Outlet />}
    </VehicleContext.Provider>
  );
};
