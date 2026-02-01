import { Link } from "react-router-dom";

export const Card = ({ data }) => {
  return (
    <div className=" group bg-[#161616] rounded-2xl">
      <div className="relative aspect-16/10 overflow-hidden">
        <img
          alt="Apex GT-S"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUPkaWhL28AXDlUqiGfaAnR1B7j0ZlL_wZHqNH06TSuKAEOxhbAmWfhpCqEALucQXLv3mQ1amzSPwpx-e4JhBqshDiSXsN9Amb6k0MAVTJv8IydERw1aLXkIWfisR4lGqZK7115PRwqkiRUvxxfqDnznCSqRd1FWpZzk_nKh9xVCajAXiFa9iP_mgmePRq9cYUiQB_FENHBw3d9e16kxj0RCbaMI1zU4LofeEomLVaDY7yROohtZZVLaOvhz2N-GKQl7DpcC7Mm1c"
        />
        <div className="absolute top-4 left-4 px-3 py-1 bg-[#00C79F] text-background-dark text-[10px] font-bold uppercase tracking-widest rounded">
          In Stock
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-4 tracking-tight">
          {data.nombre_vehiculo}
        </h3>
        <div className="grid grid-cols-3 gap-2 mb-6">
          <div className="flex flex-col items-center gap-1 p-2 bg-white/5 rounded-lg">
            <span className="material-symbols-outlined text-accent text-lg">
              bolt
            </span>
            <span className="text-[10px] text-gray-500 uppercase font-bold">
              {data.poder_hp} HP
            </span>
          </div>
          <div className="flex flex-col items-center gap-1 p-2 bg-white/5 rounded-lg">
            <span className="material-symbols-outlined text-accent text-lg">
              timer
            </span>
            <span className="text-[10px] text-gray-500 uppercase font-bold">
              {data.aceleracion_0_100} s
            </span>
          </div>
          <div className="flex flex-col items-center gap-1 p-2 bg-white/5 rounded-lg">
            <span className="material-symbols-outlined text-accent text-lg">
              settings_input_component
            </span>
            <span className="text-[10px] text-gray-500 uppercase font-bold">
              {data.torque_nm}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-white/5 pt-6">
          <span className="text-2xl font-bold tracking-tighter">
            ${data.precio}
          </span>
          <button className="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-background-dark transition-all">
            <Link
              to={`/details/${data.id}`}
              className="material-symbols-outlined"
            >
              arrow_forward
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
