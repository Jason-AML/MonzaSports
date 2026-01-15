import { useState } from "react";
import { Layout } from "../layout/Layout";
import { Link } from "react-router-dom";

export const Collections = () => {
  const [price, setPrice] = useState(500000);
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
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                    expand_more
                  </span>
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
                          checked=""
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
                      <button className="btn btn-accent">Coupe</button>
                      <button className="btn btn-ghost">Sedan</button>
                      <button className="btn btn-ghost">SUV</button>
                      <button className="btn btn-ghost">Spider</button>
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
                        2024 Apex GT-S
                      </h3>
                      <div className="grid grid-cols-3 gap-2 mb-6">
                        <div className="flex flex-col items-center gap-1 p-2 bg-white/5 rounded-lg">
                          <span className="material-symbols-outlined text-accent text-lg">
                            bolt
                          </span>
                          <span className="text-[10px] text-gray-500 uppercase font-bold">
                            820 HP
                          </span>
                        </div>
                        <div className="flex flex-col items-center gap-1 p-2 bg-white/5 rounded-lg">
                          <span className="material-symbols-outlined text-accent text-lg">
                            timer
                          </span>
                          <span className="text-[10px] text-gray-500 uppercase font-bold">
                            2.4s
                          </span>
                        </div>
                        <div className="flex flex-col items-center gap-1 p-2 bg-white/5 rounded-lg">
                          <span className="material-symbols-outlined text-accent text-lg">
                            settings_input_component
                          </span>
                          <span className="text-[10px] text-gray-500 uppercase font-bold">
                            AWD
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between border-t border-white/5 pt-6">
                        <span className="text-2xl font-bold tracking-tighter">
                          $289,000
                        </span>
                        <button className="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-background-dark transition-all">
                          <Link
                            className="material-symbols-outlined"
                            to="/details"
                          >
                            arrow_forward
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="group bg-[#161616] rounded-2xl">
                    <div className="relative aspect-16/10 overflow-hidden">
                      <img
                        alt="Apex Horizon"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9xPUuGD7j4gFgwIwtNaLVi5hQjH4_mYMDMJucx4EgDf0DCLUXGBnMoZo24CvNoLM-sDv3AjNzd4R9vwDtWTAwkBfs5M62G1WH0a4w2W3ogqJYkBPq7uv5pKUo_ur8kZoky1aTADnK5suBNk8oCyYFpdoUO05KCtyd7y19rmKoepZB_ysBej52NaTAzS3aYLNQ9Z_4mTU5qJVEHnzWmPblx52wFU5lJLDaR_bDOVA3msHGhl6Xym0mvTgV2jKr1r70lN6FjlU4BUA"
                      />
                      <div className="absolute top-4 left-4 px-3 py-1 bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest rounded">
                        Coming Soon
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-4 tracking-tight">
                        2024 Apex Horizon SE
                      </h3>
                      <div className="grid grid-cols-3 gap-2 mb-6">
                        <div className="flex flex-col items-center gap-1 p-2 bg-white/5 rounded-lg">
                          <span className="material-symbols-outlined text-primary text-lg">
                            bolt
                          </span>
                          <span className="text-[10px] text-gray-500 uppercase font-bold">
                            650 HP
                          </span>
                        </div>
                        <div className="flex flex-col items-center gap-1 p-2 bg-white/5 rounded-lg">
                          <span className="material-symbols-outlined text-primary text-lg">
                            timer
                          </span>
                          <span className="text-[10px] text-gray-500 uppercase font-bold">
                            3.1s
                          </span>
                        </div>
                        <div className="flex flex-col items-center gap-1 p-2 bg-white/5 rounded-lg">
                          <span className="material-symbols-outlined text-primary text-lg">
                            settings_input_component
                          </span>
                          <span className="text-[10px] text-gray-500 uppercase font-bold">
                            DCT
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between border-t border-white/5 pt-6">
                        <span className="text-2xl font-bold tracking-tighter">
                          $195,500
                        </span>
                        <button className="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-background-dark transition-all">
                          <span className="material-symbols-outlined">
                            arrow_forward
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="group bg-[#161616] rounded-2xl">
                    <div className="relative aspect-16/10 overflow-hidden">
                      <img
                        alt="Apex Volt"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsQMkJakCvwFag2cZ9xNRIdkjA_w0-Zm3DN11jCWcfW6SMyI_s1MTaJef5srezbYBtva7cvHgNmgE1hgVNv9wiFBu6Cai35H2LWqbLfhftLP-OFL5OK7c4Q3ePtz9XE9Q3sDHXlX-cEyVtOe8kNX1vM8Mris2kuI9ffVH9AX7n0-3mIyBQ1uNKoZE8nA-ovtThHk9-4yCNV7KyOwlCUsIV7fV6PjoTVjAgy6REtzNUthnoFkvynDZM2YnoIpTauw2MPp4c1xi55Nc"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-4 tracking-tight">
                        2025 Apex Volt GT
                      </h3>
                      <div className="grid grid-cols-3 gap-2 mb-6">
                        <div className="flex flex-col items-center gap-1 p-2 bg-white/5 rounded-lg">
                          <span className="material-symbols-outlined text-primary text-lg">
                            electric_bolt
                          </span>
                          <span className="text-[10px] text-gray-500 uppercase font-bold">
                            EV
                          </span>
                        </div>
                        <div className="flex flex-col items-center gap-1 p-2 bg-white/5 rounded-lg">
                          <span className="material-symbols-outlined text-primary text-lg">
                            timer
                          </span>
                          <span className="text-[10px] text-gray-500 uppercase font-bold">
                            2.1s
                          </span>
                        </div>
                        <div className="flex flex-col items-center gap-1 p-2 bg-white/5 rounded-lg">
                          <span className="material-symbols-outlined text-primary text-lg">
                            settings_input_component
                          </span>
                          <span className="text-[10px] text-gray-500 uppercase font-bold">
                            4WD
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between border-t border-white/5 pt-6">
                        <span className="text-2xl font-bold tracking-tighter">
                          $312,000
                        </span>
                        <button className="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-background-dark transition-all">
                          <span className="material-symbols-outlined">
                            arrow_forward
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="group bg-[#161616] rounded-2xl">
                    <div className="relative aspect-16/10 overflow-hidden">
                      <img
                        alt="Apex V12 Heritage"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXFcpBK9CYAD9FqERAnPOMCTbImhnbo3FHYJNW9s6E57zkcTM-6FFs9LjrUe2h566yiLruJqYMJReax9WqDFQAyVf0IH3M30ROvKqzSCIlzW6uhAFxaqxYadFlNt4s4D8dDB2c1B6W3jBO9CSgcIw2IwXrMN6wyfpQj_O_n0DCncCDHj5HbIaky2sg5zzmvi5yVkgGGVxnQqez5CQPnqet4sDnnJw3eaPc5c_FwuDcVqaacnLxv4i0qWtvsTHQjiyjsIoQCwLdmYg"
                      />
                      <div className="absolute top-4 left-4 px-3 py-1 bg-orange-500 text-white text-[10px] font-bold uppercase tracking-widest rounded">
                        Certified
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-4 tracking-tight">
                        2022 Apex Heritage V12
                      </h3>
                      <div className="grid grid-cols-3 gap-2 mb-6">
                        <div className="flex flex-col items-center gap-1 p-2 bg-white/5 rounded-lg">
                          <span className="material-symbols-outlined text-primary text-lg">
                            bolt
                          </span>
                          <span className="text-[10px] text-gray-500 uppercase font-bold">
                            780 HP
                          </span>
                        </div>
                        <div className="flex flex-col items-center gap-1 p-2 bg-white/5 rounded-lg">
                          <span className="material-symbols-outlined text-primary text-lg">
                            timer
                          </span>
                          <span className="text-[10px] text-gray-500 uppercase font-bold">
                            2.9s
                          </span>
                        </div>
                        <div className="flex flex-col items-center gap-1 p-2 bg-white/5 rounded-lg">
                          <span className="material-symbols-outlined text-primary text-lg">
                            settings_input_component
                          </span>
                          <span className="text-[10px] text-gray-500 uppercase font-bold">
                            MAN
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between border-t border-white/5 pt-6">
                        <span className="text-2xl font-bold tracking-tighter">
                          $425,000
                        </span>
                        <button className="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-background-dark transition-all">
                          <span className="material-symbols-outlined">
                            arrow_forward
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
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
