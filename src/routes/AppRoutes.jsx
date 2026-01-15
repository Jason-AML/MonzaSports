import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Collections } from "../pages/Collections";
import { Details } from "../pages/Details";
export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};
