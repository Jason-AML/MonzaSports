import { useCallback, useContext, useEffect, useState } from "react";
import { getVehicle } from "../service/vehicleService";
import { createContext } from "react";

export const VehicleContext = createContext();
export const useVehicle = () => {
  const context = useContext(VehicleContext);
  if (!context) throw new Error("No hay contexto");
  return context;
};

export const VehicleContextProvider = ({ children }) => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCar = useCallback(async () => {
    setLoading(true);
    try {
      const result = await getVehicle();

      setVehicles(result);
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    getCar();
  }, [getCar]);
  return (
    <VehicleContext.Provider
      value={{
        vehicles,
        loading,
      }}
    >
      {children}
    </VehicleContext.Provider>
  );
};
