import { useState } from "react";
import { Layout } from "../layout/Layout";

import { Card } from "../components/collection/Card";
import { useVehicle } from "../context/VehicleContext";

export const Collections = () => {
  const [price, setPrice] = useState(500000);
  const [active, setActive] = useState("Coupe");
  const styles = ["Coupe", "Sedan", "SUV", "Spider"];
  const { vehicles, loading } = useVehicle();
  return (
    <>
      <Layout>
        <div className="bg-[#0A0A0A] font-display text-white selection:bg-primary/30">
          <div className="pt-28 pb-20 px-6 lg:px-10 max-w-screen-2xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
              <div>
                <nav className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-4 flex items-center gap-2">
                  <a className="hover:text-primary transition-colors" href="#">
                    Home
                  </a>
                  <span>/</span>
                  <span className="text-gray-300">collections</span>
                </nav>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#00C79F]">
                  OUR COLLECTION
                </h1>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs uppercase tracking-widest text-gray-500">
                  Sort By
                </span>
                <div className="relative">
                  <select className="bg-[#0A0A0A] border-white/10 rounded-lg text-sm px-4 py-2.5 pr-10 appearance-none focus:ring-primary focus:border-primary cursor-pointer min-w-45">
                    <option>Newest Arrivals</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Performance: 0-100</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-10">
              <aside className="w-full lg:w-72 space-y-8 shrink-0">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
                      Brand
                    </h4>
                    <div className="space-y-2">
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          className="rounded border-white/10 bg-white/5 text-primary focus:ring-primary/20"
                          type="checkbox"
                        />
                        <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                          Apex Series
                        </span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          className="rounded border-white/10 bg-white/5 text-primary focus:ring-primary/20"
                          type="checkbox"
                        />
                        <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                          Zenith Motors
                        </span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          className="rounded border-white/10 bg-white/5 text-primary focus:ring-primary/20"
                          type="checkbox"
                        />
                        <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                          Volt Heritage
                        </span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
                      Body Style
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {styles.map((item) => (
                        <button
                          key={item}
                          className={`btn transition-all ${
                            active === item
                              ? "bg-[#00C79F] text-black"
                              : "btn-ghost"
                          }`}
                          onClick={() => setActive(item)}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
                      Price Range
                    </h4>
                    <div className="px-2">
                      <input
                        type="range"
                        min={50000}
                        max={1000000}
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="range range-accent"
                      />
                      <div className="flex justify-between mt-3 text-[10px] text-gray-500 uppercase font-bold tracking-tighter">
                        <span>$50k</span>
                        <span>{price}</span>
                        <span>$1M+</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
                      Year
                    </h4>
                    <select className="w-full bg-[#0A0A0A] border-white/10 rounded-lg text-sm px-4 py-2.5 focus:ring-primary">
                      <option>All Years</option>
                      <option>2024</option>
                      <option>2023</option>
                      <option>2022</option>
                    </select>
                  </div>
                  <button className="w-full py-3 bg-white/5 border border-white/10 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors">
                    Clear Filters
                  </button>
                </div>
              </aside>
              <div className="grow">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {vehicles.map((vehicle) => (
                    <Card key={vehicle.id} data={vehicle} />
                  ))}
                </div>
                <div className="mt-12 flex justify-center items-center gap-2">
                  <button className="size-10 flex items-center justify-center rounded-lg border border-white/10 hover:border-primary transition-colors">
                    <span className="material-symbols-outlined">west</span>
                  </button>
                  <button className="size-10 flex items-center justify-center rounded-lg bg-primary text-background-dark font-bold">
                    1
                  </button>
                  <button className="size-10 flex items-center justify-center rounded-lg border border-white/10 hover:border-primary transition-colors font-bold">
                    2
                  </button>
                  <button className="size-10 flex items-center justify-center rounded-lg border border-white/10 hover:border-primary transition-colors font-bold">
                    3
                  </button>
                  <button className="size-10 flex items-center justify-center rounded-lg border border-white/10 hover:border-primary transition-colors">
                    <span className="material-symbols-outlined">east</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
