import { Link } from "react-router-dom";

export const CategorieSplit = () => {
  return (
    <section className="flex flex-col md:flex-row h-auto md:h-[80vh] w-full border-y border-white/10">
      <div className="relative group flex-1 overflow-hidden split-card border-r border-white/10">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          data-alt="Modern supercar front profile showing sleek headlights"
          style={{
            backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAUPkaWhL28AXDlUqiGfaAnR1B7j0ZlL_wZHqNH06TSuKAEOxhbAmWfhpCqEALucQXLv3mQ1amzSPwpx-e4JhBqshDiSXsN9Amb6k0MAVTJv8IydERw1aLXkIWfisR4lGqZK7115PRwqkiRUvxxfqDnznCSqRd1FWpZzk_nKh9xVCajAXiFa9iP_mgmePRq9cYUiQB_FENHBw3d9e16kxj0RCbaMI1zU4LofeEomLVaDY7yROohtZZVLaOvhz2N-GKQl7DpcC7Mm1c")`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40 group-hover:bg-primary/10 transition-colors duration-500 split-overlay"></div>
        <div className="relative h-full flex flex-col justify-end p-12 lg:p-20">
          <span className="text-[#00C79F] font-bold tracking-[0.3em] uppercase mb-4 block">
            Engineered
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">
            AUTOMOTIVE
          </h2>
          <p className="text-gray-300 max-w-md mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            From grand tourers to track-ready legends. Redefining what it means
            to drive.
          </p>
          <Link
            to="/collections"
            className="flex items-center gap-4 group/btn"
            href="#"
          >
            <span className="text-sm font-bold uppercase tracking-widest">
              Browse Cars
            </span>
            <div className="size-10 rounded-full border border-white/30 flex items-center justify-center group-hover/btn:bg-primary group-hover/btn:border-primary group-hover/btn:text-background-dark transition-all">
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div className="relative group flex-1 overflow-hidden split-card">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          data-alt="Matte black high performance motorcycle engine details"
          style={{
            backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuB97_MSkwurOO82BDGZX6_WjBUQdhwYxI8HxyBzcY560DmNvX4r7SsjZ0cnmCiP60Yhjsoflg5weodqA0ktKmTno6UUN9R7MHRy5iXalcUXws_WY1ycD_cBr-bp_joaPU3Ul_YbNT-n58Yz-wMNdWhCjk_MUcwQfXCArGsi6iXaYJ2DGHj9mG4IYdT534Tzo0MSUfq_WYKh2IIQachpPTHw9HCzCmLzW5_MAzRy_Kgk5tsNgQXYt9U8G0l9D-8hLx5FPYjK4P6ohcM")`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40 group-hover:bg-primary/10 transition-colors duration-500 split-overlay"></div>
        <div className="relative h-full flex flex-col justify-end p-12 lg:p-20">
          <span className="text-[#00C79F] font-bold tracking-[0.3em] uppercase mb-4 block">
            Unleashed
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">
            MOTORSPORTS
          </h2>
          <p className="text-gray-300 max-w-md mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            Pure adrenaline on two wheels. The fastest production bikes on the
            planet.
          </p>
          <a className="flex items-center gap-4 group/btn" href="#">
            <span className="text-sm font-bold uppercase tracking-widest">
              Browse Bikes
            </span>
            <div className="size-10 rounded-full border border-white/30 flex items-center justify-center group-hover/btn:bg-primary group-hover/btn:border-primary group-hover/btn:text-background-dark transition-all">
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
