import { useState } from "react";
import {
  loginService,
  logoutService,
  registerService,
} from "../service/authService";

export const useAuthUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const signUpNewUser = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const { data, error: serviceError } = await registerService(email, password);

      if (serviceError) {
        throw new Error(serviceError.message);
      }

      if (
        (data.user && !data.user.identities) ||
        data.user.identities.length === 0
      ) {
        throw new Error("Este correo ya está registrado");
      }

      if (data.user) {
        return data;
      }

      throw new Error("El registro no se completó");
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const loginUser = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const { error: serviceError } = await loginService(email, password);

      if (serviceError) {
        throw new Error(serviceError.message);
      }
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = async () => {
    setLoading(true);
    setError(null);
    try {
      await logoutService();
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { signUpNewUser, loginUser, logoutUser, loading, error };
};
