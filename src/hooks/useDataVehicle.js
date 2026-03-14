import { useCallback, useEffect, useState } from "react";
import {
  createTestDrive,
  getMarcas,
  getVehicle,
  getTestDrive,
} from "../service/vehicleService";
import { useAuthContext } from "../context/AuthContext";
import { notifiTestDrive } from "../n8n/notifyTestDrive";

export const useDataVehicle = () => {
  const [vehicles, setVehicles] = useState([]);
  const [marcas, setMarcas] = useState([]);
  const [testDrive, setTestDrive] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useAuthContext();

  const requestVehicle = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getVehicle();
      setVehicles(data);
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const getCategory = useCallback(async () => {
    setLoading(true);
    try {
      const result = await getMarcas();
      setMarcas(result);
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const getTestDriveData = useCallback(async () => {
    setLoading(true);
    try {
      const result = await getTestDrive();
      setTestDrive(result);
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const insertTestDrive = async (formTestDrive) => {
    if (!user) return;
    setLoading(true);
    try {
      const newTestDrive = await createTestDrive(formTestDrive);
      await getTestDriveData();
      await notifiTestDrive(newTestDrive.id, user.email);
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategory();
    requestVehicle();
  }, [getCategory, requestVehicle]);

  useEffect(() => {
    if (user) getTestDriveData();
  }, [user, getTestDriveData]);

  return {
    vehicles,
    marcas,
    testDrive,
    loading,
    error,
    getCategory,
    insertTestDrive,
    requestVehicle,
    getTestDriveData,
  };
};
