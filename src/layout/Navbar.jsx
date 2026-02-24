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
            <div className="flex items-center gap-6 relative group">
              <button className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-widest rounded-lg transition-all hover:bg-white/10">
                <span className="material-symbols-outlined text-sm">
                  person
                </span>
                My Monza Portal
              </button>
              <div className="size-10 rounded-full border border-primary/30 overflow-hidden cursor-pointer">
                <img
                  alt="Profile"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6khf7yjo0KsUxSTZP4NXFYdnDRUyn8VAIR5B9BSW3SMzBCIiNMRpmGeDRvRt9TeQjSWqER4nNBiGQNCikJRVRxsjdjZWuNC1swcjUZ2lzohJBtLoBLV67xAL5FKk3_LvP_pWb0by2MY8LsdKNobKderjRU1Wev52qNTMcrozYzKh_1tT9mYJ9MywiDG17gX5h1Bs38_ibY5_SAPIvz6E4XBF4-QXPHo8VrCkhlMKuibka7v9xroPd7tYcy4DS0-RiXEOn4iqUBzk"
                />
              </div>
              <div className="absolute right-0 top-full mt-2 w-72 bg-[#16181D] rounded-2xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 origin-top-right scale-95 group-hover:scale-100">
                <div className="px-4 py-4 border-b border-white/5 mb-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-base font-bold tracking-tight text-white">
                      <h1>{user.email}</h1>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase tracking-wider text-primary font-bold">
                      Platinum Member
                    </span>
                    <div className="size-2 rounded-full bg-primary animate-pulse"></div>
                  </div>
                </div>
                <div className="space-y-1 mb-2 flex flex-col gap-2">
                  <Link
                    to="/dashboard"
                    className="flex items-center gap-2"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-lg">
                      directions_car
                    </span>
                    <span className="font-medium">My Garage</span>
                  </Link>
                  <a className="flex items-center gap-2" href="#">
                    <span className="material-symbols-outlined text-lg">
                      calendar_today
                    </span>
                    <span className="font-medium">Service Appointments</span>
                  </a>
                  <a className="flex items-center gap-2" href="#">
                    <span className="material-symbols-outlined text-lg">
                      military_tech
                    </span>
                    <span className="font-medium">Membership Rewards</span>
                  </a>
                </div>
                <div className="pt-2 border-t border-white/5 space-y-1 mb-2">
                  <a className="flex items-center gap-2" href="#">
                    <span className="material-symbols-outlined text-lg">
                      settings
                    </span>
                    <span className="font-medium">Account Settings</span>
                  </a>
                  <a className="flex items-center gap-2" href="#">
                    <span className="material-symbols-outlined text-lg">
                      shield
                    </span>
                    <span className="font-medium">Security</span>
                  </a>
                </div>
                <div className="pt-2 border-t border-white/5">
                  <a
                    className="flex items-center gap-3 px-4 py-3 text-sm text-red-400/80 transition-all duration-200 hover:bg-red-500/10 hover:text-red-400 rounded-lg"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-lg">
                      logout
                    </span>
                    <button
                      onClick={handleLogout}
                      className="font-bold uppercase tracking-widest text-[11px] cursor-pointer"
                    >
                      Log Out
                    </button>
                  </a>
                </div>
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
