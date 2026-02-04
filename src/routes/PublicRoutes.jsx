import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const PublicRoute = ({ children }) => {
  const { user, loadingAuth } = useAuthContext();

  if (loadingAuth) return <p>Cargando</p>;

  if (user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PublicRoute;
