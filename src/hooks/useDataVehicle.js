import { useCallback, useEffect, useState } from "react";
import {
  createTestDrive,
  getMarcas,
  getVehicle,
} from "../service/vehicleService";

export const useDataVehicle = () => {
  const [vehicles, setVehicles] = useState([]);
  const [marcas, setMarcas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const requestVehicle = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getVehicle();

      if (error) throw new Error(error);

      setVehicles(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const getCategory = useCallback(async () => {
    setLoading(true);
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
    setLoading(true);
    try {
      await createTestDrive(formTestDrive);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getCategory();
    requestVehicle();
    console.log(vehicles);
  }, [getCategory, requestVehicle]);
  return {
    vehicles,
    marcas,
    loading,
    error,
    getCategory,
    insertTestDrive,
    requestVehicle,
  };
};
