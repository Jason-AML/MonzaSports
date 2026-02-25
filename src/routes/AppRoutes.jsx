import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRoute from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import ScrollToTop from "../components/scroll/ScrollToTop";
import { VehicleContextProvider } from "../context/VehicleContext";

const Home = lazy(() =>
  import("../pages/Home").then((m) => ({ default: m.Home })),
);
const Collections = lazy(() =>
  import("../pages/Collections").then((m) => ({ default: m.Collections })),
);
const Details = lazy(() =>
  import("../pages/Details").then((m) => ({ default: m.Details })),
);
const Reservation = lazy(() =>
  import("../pages/Reservation").then((m) => ({ default: m.Reservation })),
);
const Register = lazy(() =>
  import("../pages/Register").then((m) => ({ default: m.Register })),
);
const Login = lazy(() =>
  import("../pages/Login").then((m) => ({ default: m.Login })),
);
const Dashboard = lazy(() =>
  import("../pages/Dashboard").then((m) => ({ default: m.Dashboard })),
);

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen">
            Cargando...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />

          <Route element={<VehicleContextProvider />}>
            <Route path="/collections" element={<Collections />} />
            <Route path="/details/:id" element={<Details />} />
            <Route element={<PrivateRoutes />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/reservation/:id" element={<Reservation />} />
            </Route>
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
      </Suspense>
    </BrowserRouter>
  );
};
