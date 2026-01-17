import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingActionBar } from "./FloatingActionBar";

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="w-full bg-[#16181D]">{children}</main>
      <FloatingActionBar />
      <Footer />
    </>
  );
};
