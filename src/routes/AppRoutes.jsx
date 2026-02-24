import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Collections } from "../pages/Collections";
import { Details } from "../pages/Details";
import { Reservation } from "../pages/Reservation";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import PublicRoute from "./PublicRoutes";
import { Dashboard } from "../pages/Dashboard";
import PrivateRoutes from "./PrivateRoutes";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/details/:id" element={<Details />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/reservation/:id" element={<Reservation />} />
        </Route>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
