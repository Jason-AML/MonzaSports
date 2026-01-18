import { ToastContainer } from "react-toastify";
import { AppRoutes } from "./routes/AppRoutes";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
      <AppRoutes />
    </>
  );
}

export default App;
