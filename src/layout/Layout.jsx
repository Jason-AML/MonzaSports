import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="w-full">{children}</main>
      <Footer />
    </>
  );
};
