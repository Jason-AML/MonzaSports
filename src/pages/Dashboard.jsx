import { useEffect, useState } from "react";
import { Layout } from "../layout/Layout";
import { getTestDrive } from "../service/vehicleService";
import { useAuthContext } from "../context/AuthContext";

export const Dashboard = () => {
  const { user } = useAuthContext();
  const [testDrive, setTestDrive] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const insertTestDrive = async () => {
    setLoading(true);
    try {
      const result = await getTestDrive();
      setTestDrive(result);
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  console.log(testDrive);
  useEffect(() => {
    insertTestDrive();
  }, [user]);
  return (
    <>
      <Layout>
        <div className="flex-1 max-w-[1440px] mx-auto w-full px-6 lg:px-20 py-20 space-y-12 ">
          {/* Hero Carousel: Registered Vehicles */}
          <section>
            <div className="flex items-center justify-between mb-6 px-2">
              <h2 className="text-2xl font-bold tracking-tight text-white">
                Your Garage
              </h2>
              <div className="flex gap-2">
                <button className="p-2 rounded-full border border-slate-200  hover:bg-primary/10 transition-colors">
                  <span className="material-symbols-outlined text-white">
                    chevron_left
                  </span>
                </button>
                <button className="p-2 rounded-full border border-slate-200  hover:bg-primary/10 transition-colors">
                  <span className="material-symbols-outlined text-white">
                    chevron_right
                  </span>
                </button>
              </div>
            </div>
            <div className="flex overflow-x-auto gap-6 pb-6 no-scrollbar snap-x">
              {/* Vehicle 1 */}
              {testDrive ? (
                testDrive.map((item) => (
                  <div
                    key={item.id}
                    className="flex-none w-[450px] snap-center"
                  >
                    <div className="relative group cursor-pointer overflow-hidden rounded-xl bg-card-dark aspect-[16/10]">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        data-alt="High-end charcoal grey sports car in a studio"
                        style={{
                          backgroundImage: `url(${item.id_vehicle.url_img})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                        }}
                      ></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-80"></div>
                      <div className="absolute top-4 right-4">
                        <span className="bg-primary text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                          {item.estado}
                        </span>
                      </div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-2xl font-bold text-white mb-1">
                          {item.id_vehicle.nombre_vehiculo}
                        </h3>
                        <div className="flex items-center gap-4 text-slate-300 text-sm">
                          <span className="flex items-center gap-1">
                            {item.hora_asignada}
                          </span>
                          <span className="flex items-center gap-1 text-green-400 font-medium">
                            {item.fecha_asignada}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>no hay test</p>
              )}
              {/* Vehicle 2 */}
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left: Quick Actions & Membership */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-xl font-bold tracking-tight mb-6 flex items-center gap-2 text-white">
                  <span className="material-symbols-outlined text-primary">
                    apps
                  </span>
                  Quick Actions
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {/* Action 1 */}
                  <div className="group flex flex-col items-center justify-center p-6 bg-[#2B2F36] dark:bg-card-dark rounded-xl border  dark:border-slate-800 card-glow transition-all cursor-pointer">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-3xl">
                        calendar_today
                      </span>
                    </div>
                    <span className="font-bold text-sm text-center text-white">
                      Book Service
                    </span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">
                      Maintenance
                    </span>
                  </div>
                  {/* Action 2 */}
                  <div className="group flex flex-col items-center justify-center p-6 bg-[#2B2F36]  rounded-xl border  dark:border-slate-800 card-glow transition-all cursor-pointer">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-3xl">
                        description
                      </span>
                    </div>
                    <span className="font-bold text-sm text-center text-white">
                      Documents
                    </span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">
                      Insurance &amp; Title
                    </span>
                  </div>
                  {/* Action 3 */}
                  <div className="group flex flex-col items-center justify-center p-6 bg-[#2B2F36]  rounded-xl border  dark:border-slate-800 card-glow transition-all cursor-pointer">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-3xl">
                        chat_bubble
                      </span>
                    </div>
                    <span className="font-bold text-sm text-center text-white">
                      Concierge
                    </span>
                    <span className="text-[10px] text-green-500 uppercase tracking-widest mt-1">
                      Live Now
                    </span>
                  </div>
                  {/* Action 4 */}
                  <div className="group flex flex-col items-center justify-center p-6 bg-[#2B2F36]  rounded-xl border  dark:border-slate-800 card-glow transition-all cursor-pointer">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-3xl">
                        diamond
                      </span>
                    </div>
                    <span className="font-bold text-sm text-center text-white">
                      Upgrades
                    </span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">
                      Exclusive
                    </span>
                  </div>
                </div>
              </div>
              {/* Performance Stats Section */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold tracking-tight flex items-center gap-2 text-white">
                    <span className="material-symbols-outlined text-primary">
                      analytics
                    </span>
                    Performance &amp; Eco-Impact
                  </h2>
                  <select className="bg-transparent border-none text-xs font-bold text-slate-500 uppercase tracking-widest focus:ring-0">
                    <option>Last 30 Days</option>
                    <option>Last Quarter</option>
                  </select>
                </div>
                <div className="p-8 bg-[#2B2F36] dark:bg-card-dark rounded-xl border  dark:border-slate-800 relative overflow-hidden">
                  {/* Sleek Analytics Mockup */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">
                        Avg. Efficiency
                      </p>
                      <h4 className="text-3xl font-bold text-[#C59E3E]">
                        4.2{" "}
                        <span className="text-sm font-normal text-slate-400">
                          mi/kWh
                        </span>
                      </h4>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">
                        Carbon Offset
                      </p>
                      <h4 className="text-3xl font-bold text-green-500">
                        2.4{" "}
                        <span className="text-sm font-normal text-slate-400">
                          tons CO2
                        </span>
                      </h4>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">
                        Active Hours
                      </p>
                      <h4 className="text-3xl font-bold text-white">
                        142{" "}
                        <span className="text-sm font-normal text-slate-400">
                          hrs
                        </span>
                      </h4>
                    </div>
                  </div>
                  {/* Line Chart Placeholder */}
                  <div className="h-48 w-full relative">
                    <svg className="w-full h-full" viewBox="0 0 1000 200">
                      <defs>
                        <linearGradient
                          id="chartGradient"
                          x1="0"
                          x2="0"
                          y1="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="#d3ab45"
                            stopOpacity="0.2"
                          />
                          <stop
                            offset="100%"
                            stopColor="#d3ab45"
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,150 Q100,120 200,160 T400,100 T600,140 T800,80 T1000,120 L1000,200 L0,200 Z"
                        fill="url(#chartGradient)"
                      />
                      <path
                        d="M0,150 Q100,120 200,160 T400,100 T600,140 T800,80 T1000,120"
                        fill="none"
                        stroke="#d3ab45"
                        strokeWidth="3"
                      />
                      {/* Circles for points */}
                      <circle cx="400" cy="100" fill="#d3ab45" r="4" />
                      <circle cx="800" cy="80" fill="#d3ab45" r="4" />
                    </svg>
                    <div className="absolute inset-0 flex justify-between items-end text-[10px] text-slate-500 uppercase font-bold pt-4">
                      <span>WK 1</span>
                      <span>WK 2</span>
                      <span>WK 3</span>
                      <span>WK 4</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Sidebar: Membership & Concierge */}
            <div className="space-y-8">
              {/* Membership Status */}
              <div className="bg-[#C59E3E] p-8 rounded-xl shadow-2xl relative overflow-hidden text-black">
                <div className="absolute -right-4 -top-4 opacity-10">
                  <span className="material-symbols-outlined text-[120px]">
                    shield
                  </span>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-2 opacity-70">
                  Membership Tier
                </p>
                <h3 className="text-3xl font-bold mb-6">Apex Gold</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="material-symbols-outlined text-base">
                      check_circle
                    </span>
                    <span>Priority Service Booking</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="material-symbols-outlined text-base">
                      check_circle
                    </span>
                    <span>Complimentary Valet</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="material-symbols-outlined text-base">
                      check_circle
                    </span>
                    <span>Track Day Access</span>
                  </div>
                </div>
                <button className="w-full py-3 bg-black text-white rounded-lg text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors cursor-pointer">
                  View Benefits
                </button>
              </div>
              {/* Personal Concierge */}
              <div className="bg-[#2B2F36] dark:bg-card-dark p-6 rounded-xl border  dark:border-slate-800">
                <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-slate-400">
                  Your Concierge
                </h4>
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="h-14 w-14 rounded-full bg-cover bg-center ring-2 ring-primary ring-offset-4 ring-offset-white dark:ring-offset-card-dark"
                    data-alt="Portrait of a female concierge manager"
                    style={{
                      backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBCNnxB2UZOdWUtIbig5LpqWheAD6FbgRaQaXnHnkIOGo7d3pauCMhBMUUqlsVfFH7jkPNW7WXifNrY0qm5wwbXU9bzf4dfEyTHzqjLQpkTv8KkWrQm1hjLsCliIzfTG4kaP3MOsO16laZmZkAzgvTuemOHyDWZPFngJDwQ2HJD9NhFrY9LYcNHQ6rLCy4jkbmZw43cwzMKq5RbMcYLXbXYllADr3pGhvWBC484_f7n-C46jDKZiz12OepX_XcuN2Zwns7oF-U6Eew')`,
                    }}
                  ></div>
                  <div>
                    <p className="font-bold text-white">Julianne Vane</p>
                    <div className="flex items-center gap-1.5 text-green-500">
                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                      <span className="text-xs font-medium">Available</span>
                    </div>
                  </div>
                </div>
                <button className="w-full flex items-center justify-center gap-2 py-3 border border-[#C59E3E] text-[#C59E3E] hover:bg-primary/5 rounded-lg text-sm font-bold transition-all cursor-pointer">
                  <span className="material-symbols-outlined text-lg">
                    call
                  </span>
                  Request Callback
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
