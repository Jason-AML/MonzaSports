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
  const {
    vehicles,
    marcas,
    testDrive,
    loading,
    error,
    insertTestDrive,
    requestVehicle,
    getCategory,
  } = useDataVehicle();

  return (
    <VehicleContext.Provider
      value={{
        vehicles,
        marcas,
        testDrive,
        loading,
        error,
        insertTestDrive,
        requestVehicle,
        getCategory,
      }}
    >
      {children ?? <Outlet />}
    </VehicleContext.Provider>
  );
};
