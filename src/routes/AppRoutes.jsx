import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Collections } from "../pages/Collections";
import { Details } from "../pages/Details";
import { Reservation } from "../pages/Reservation";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/reservation/:id" element={<Reservation />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
