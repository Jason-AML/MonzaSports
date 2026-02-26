import { useCallback, useContext, useEffect, useState } from "react";
import {
  createTestDrive,
  getMarcas,
  getVehicle,
} from "../service/vehicleService";
import { createContext } from "react";
import { Outlet } from "react-router-dom";

export const VehicleContext = createContext();
export const useVehicle = () => {
  const context = useContext(VehicleContext);
  if (!context) throw new Error("No hay contexto");
  return context;
};

export const VehicleContextProvider = ({ children }) => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [marcas, setMarcas] = useState([]);
  const [adding, setAdding] = useState(null);
  const [loadingCategory, setLoadingCategory] = useState(false);
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

  const getCategory = useCallback(async () => {
    setLoadingCategory(true);
    try {
      const result = await getMarcas();
      setMarcas(result);
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  }, []);
  const insertTestDrive = async (formTestDrive) => {
    setAdding(true);
    try {
      await createTestDrive(formTestDrive);
    } catch (error) {
      console.error(error);
    } finally {
      setAdding(false);
    }
  };
  useEffect(() => {
    getCar();
    getCategory();
  }, [getCar, getCategory]);
  return (
    <VehicleContext.Provider
      value={{
        vehicles,
        loading,
        loadingCategory,
        marcas,
        insertTestDrive,
        adding,
      }}
    >
      {children ?? <Outlet />}
    </VehicleContext.Provider>
  );
};
