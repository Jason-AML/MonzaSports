import { NavLink, Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { useAuthUser } from "../hooks/useAuthUser";
import { toast } from "react-toastify";

export const Navbar = () => {
  const { user } = useAuthContext();
  const { logoutUser } = useAuthUser();
  const linkStyle = ({ isActive }) =>
    `text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest ${
      isActive ? " text-[#00C79F]" : " hover:text-[#00C79F]"
    }`;
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      logoutUser();
      toast.success("Ha salido de su cuenta con exito");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <nav className="fixed top-0 w-full z-50  text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-3">
            <NavLink to="/" className="text-xl font-bold tracking-tighter">
              MONZA MOTORS
            </NavLink>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <NavLink className={linkStyle} to="/collections">
              Collections
            </NavLink>
            <NavLink className={linkStyle} to="*">
              Ownership
            </NavLink>
            <NavLink className={linkStyle} to="*" href="*">
              Experience
            </NavLink>
          </div>
        </div>
        {user ? (
          <>
            {" "}
            <div className="flex justify-center items-center gap-5">
              <h1>{user.email}</h1>
              <button className="btn btn-error" onClick={handleLogout}>
                SALIR
              </button>
              <div className="size-10 rounded-full border border-primary/30 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  data-alt="User profile avatar of a customer"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6khf7yjo0KsUxSTZP4NXFYdnDRUyn8VAIR5B9BSW3SMzBCIiNMRpmGeDRvRt9TeQjSWqER4nNBiGQNCikJRVRxsjdjZWuNC1swcjUZ2lzohJBtLoBLV67xAL5FKk3_LvP_pWb0by2MY8LsdKNobKderjRU1Wev52qNTMcrozYzKh_1tT9mYJ9MywiDG17gX5h1Bs38_ibY5_SAPIvz6E4XBF4-QXPHo8VrCkhlMKuibka7v9xroPd7tYcy4DS0-RiXEOn4iqUBzk"
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center gap-6">
              <Link to="/register" className="btn btn-accent">
                Registrar
              </Link>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};
