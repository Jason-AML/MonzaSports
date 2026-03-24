import { Map } from "../components/map/Map";
import { Layout } from "../layout/Layout";
import profile from "../assets/blank-profile.webp";
import { useDealers } from "../hooks/useDealers";
export const PaginaMapa = () => {
  const { dealers, loading, error } = useDealers();

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;
  const styleMap = { width: "100%", height: "100%" };

  return (
    <>
      <Layout>
        <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
          {/* Main */}
          <main className="grow flex flex-col md:grid md:grid-cols-12">
            {/* Mapa */}
            <section className="md:col-span-8 h-[40vh] md:h-full">
              <Map
                locations={dealers}
                zoom={13}
                containerStyle={styleMap}
                renderInfo={(dealer) => (
                  <div>
                    <h3 className="font-bold">{dealer.name}</h3>
                    <p>{dealer.address}</p>
                    <p>{dealer.city}</p>
                    <p>{dealer.phone}</p>
                  </div>
                )}
              />
            </section>

            {/* Sidebar */}
            <aside className="md:col-span-4 bg-gray-900 text-white p-6 md:p-8 flex flex-col gap-8 shadow-2xl overflow-y-auto max-h-[60vh] md:max-h-full">
              {/* Badge */}
              <div>
                <span className="inline-block px-2 py-1 bg-teal-100 text-teal-600 text-xs font-bold tracking-widest uppercase rounded mb-4 border border-teal-200">
                  Vehicle Ready
                </span>
                <h2 className="text-3xl font-light">
                  Your Delivery Is{" "}
                  <span className="text-teal-400 font-bold">Confirmed</span>
                </h2>
              </div>

              {/* Detail Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <span className="material-symbols-outlined text-teal-400 mb-2">
                    calendar_today
                  </span>
                  <p className="text-xs text-gray-400 uppercase tracking-tighter">
                    Date
                  </p>
                  <p className="font-semibold">Oct 24, 2023</p>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <span className="material-symbols-outlined text-teal-400 mb-2">
                    schedule
                  </span>
                  <p className="text-xs text-gray-400 uppercase tracking-tighter">
                    Time
                  </p>
                  <p className="font-semibold">10:30 AM</p>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 col-span-2">
                  <span className="material-symbols-outlined text-teal-400 mb-2">
                    location_city
                  </span>
                  <p className="text-xs text-gray-400 uppercase tracking-tighter">
                    Address
                  </p>
                  <p className="font-semibold">
                    {dealers.slice(0, 1).map((dealer) => dealer.address)}
                  </p>
                </div>
              </div>

              {/* Consultant */}
              <div className="bg-white/5 p-5 rounded-xl border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-teal-400/30">
                    <img
                      className="w-full h-full object-cover"
                      src={profile}
                      alt="Consultant"
                    />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-tighter">
                      Consultant
                    </p>
                    <p className="font-bold">Julianne Vane</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal-400 hover:text-gray-900 transition-colors">
                    <span className="material-symbols-outlined text-sm">
                      mail
                    </span>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal-400 hover:text-gray-900 transition-colors">
                    <span className="material-symbols-outlined text-sm">
                      call
                    </span>
                  </button>
                </div>
              </div>

              {/* QR */}
              <div className="border-2 border-dashed border-white/20 p-6 rounded-2xl bg-gray-800/50 flex flex-col items-center gap-4 text-center">
                <div className="bg-white p-2 rounded-lg">
                  <div className="w-32 h-32 bg-gray-900 grid grid-cols-4 grid-rows-4 gap-1 p-2">
                    <div className="bg-white"></div>
                    <div className="bg-white"></div>
                    <div className="bg-gray-700"></div>
                    <div className="bg-white"></div>
                    <div className="bg-white"></div>
                    <div className="bg-gray-700"></div>
                    <div className="bg-white"></div>
                    <div className="bg-gray-700"></div>
                    <div className="bg-gray-700"></div>
                    <div className="bg-white"></div>
                    <div className="bg-white"></div>
                    <div className="bg-white"></div>
                    <div className="bg-white"></div>
                    <div className="bg-gray-700"></div>
                    <div className="bg-gray-700"></div>
                    <div className="bg-white"></div>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">
                    Verification Code
                  </p>
                  <p className="text-2xl font-mono tracking-[0.5em] text-teal-400">
                    EM-942-LX
                  </p>
                </div>
              </div>

              {/* Button */}
              <button className="w-full py-4 bg-teal-400 text-gray-900 font-bold rounded-xl hover:brightness-110 flex items-center justify-center gap-2 transition-all">
                <span className="material-symbols-outlined">directions</span>
                Get Directions
              </button>
            </aside>
          </main>
        </div>
      </Layout>
    </>
  );
};
