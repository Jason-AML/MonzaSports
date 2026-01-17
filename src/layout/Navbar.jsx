import { Link } from "react-router-dom";
import { ModalControl } from "../components/modal/ModalControl";
import { TestDriveModal } from "../components/modal/requestTest/TestDriveModal";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50  text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-bold tracking-tighter">MONZA MOTORS</h2>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link
              className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest"
              to="/collections"
            >
              Collections
            </Link>
            <Link
              className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest"
              to="#"
            >
              Ownership
            </Link>
            <a
              className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest"
              href="#"
            >
              Experience
            </a>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <ModalControl action="Test Drive" color="#00D3BB">
            {({ closeModal }) => <TestDriveModal closeModal={closeModal} />}
          </ModalControl>

          <div className="size-10 rounded-full border border-primary/30 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              data-alt="User profile avatar of a customer"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6khf7yjo0KsUxSTZP4NXFYdnDRUyn8VAIR5B9BSW3SMzBCIiNMRpmGeDRvRt9TeQjSWqER4nNBiGQNCikJRVRxsjdjZWuNC1swcjUZ2lzohJBtLoBLV67xAL5FKk3_LvP_pWb0by2MY8LsdKNobKderjRU1Wev52qNTMcrozYzKh_1tT9mYJ9MywiDG17gX5h1Bs38_ibY5_SAPIvz6E4XBF4-QXPHo8VrCkhlMKuibka7v9xroPd7tYcy4DS0-RiXEOn4iqUBzk"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
