import {
  loginService,
  logoutService,
  registerService,
} from "../service/authService";

export const useAuthUser = () => {
  const signUpNewUser = async (email, password) => {
    try {
      const { data, error } = await registerService(email, password);

      if (error) throw error;

      if (data.user) {
        return {
          success: true,
          message: "Registro exitoso!",
        };
      }

      return { error: "El registro no se completó" };
    } catch (err) {
      console.error("Error al registrar:", err.message);
      return { error: err.message };
    }
  };
  const signUpUser = async (email, password) => {
    const { error } = await loginService(email, password);

    if (error) {
      console.error("Error al iniciar sesión:", error.message);
      alert(error.message);
      return;
    }
  };
  const logoutUser = async () => {
    await logoutService();
  };

  return { signUpNewUser, logoutUser, signUpUser };
};
