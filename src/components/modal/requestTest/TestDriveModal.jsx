import { useEffect, useRef, useState } from "react";
import { useVehicle } from "../../../context/VehicleContext";

export const TestDriveModal = ({ closeModal, data }) => {
  const { insertTestDrive } = useVehicle();

  const TIME_SLOTS = [
    { label: "09:00 AM", available: true },
    { label: "10:30 AM", available: true },
    { label: "01:00 PM", available: true },
    { label: "02:30 PM", available: true },
    { label: "04:00 PM", available: true },
    { label: "05:30 PM", available: false },
  ];

  const [formTestDrive, setFormTestDrive] = useState({
    id_vehicle: data.id,
    date: "",
    time: "",
    experience: "guided",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const calendarRef = useRef(null);

  useEffect(() => {
    const calendar = calendarRef.current;
    if (!calendar) return;
    const handleDateChange = () => {
      const value = calendarRef.current?.value;
      if (!value) return;
      setFormTestDrive((prev) => ({ ...prev, date: value }));
      setErrors((prev) => ({ ...prev, date: "" }));
    };
    calendar.addEventListener("change", handleDateChange);
    return () => calendar.removeEventListener("change", handleDateChange);
  }, []);

  const handleTimeSelect = (time) => {
    setFormTestDrive((prev) => ({ ...prev, time }));
    setErrors((prev) => ({ ...prev, time: "" }));
  };

  const handleExperience = (value) => {
    setFormTestDrive((prev) => ({ ...prev, experience: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formTestDrive.date) newErrors.date = "Please select a date.";
    if (!formTestDrive.time) newErrors.time = "Please select a time slot.";
    return newErrors;
  };

  const handleSubmit = async () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      setLoading(true);
      await insertTestDrive(formTestDrive);
      closeModal();
    } catch (error) {
      console.error("Error al reservar:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glass-panel bg-[#191B1F] w-full max-w-6xl rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-175">
      {/* LEFT COLUMN */}
      <div className="w-full md:w-5/12 p-8 lg:p-12 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/10 bg-black/20">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
            Selected Model
          </div>
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-2 text-accent">
              {data.nombre_vehiculo}
            </h1>
            <p className="text-xl text-primary font-medium">{data.modelo}</p>
          </div>
          <div className="rounded-lg overflow-hidden border border-white/5 aspect-[4/3] bg-zinc-900">
            <div
              className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-700"
              style={{ backgroundImage: `url(${data.url_img})` }}
            />
          </div>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="p-4 rounded-lg bg-white/5">
              <p className="text-zinc-500 text-xs uppercase font-bold tracking-tighter">
                Performance
              </p>
              <p className="text-white text-lg font-medium">
                0-100 in {data.aceleracion_0_100}s
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white/5">
              <p className="text-zinc-500 text-xs uppercase font-bold tracking-tighter">
                Power
              </p>
              <p className="text-white text-lg font-medium">
                {data.poder_hp} HP
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 text-zinc-500 text-sm flex items-center gap-2">
          <span className="material-symbols-outlined text-sm">info</span>
          Test drives are approximately 45 minutes.
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="w-full md:w-7/12 p-8 lg:p-12 flex flex-col bg-zinc-900/30">
        <div className="flex-1 flex flex-col gap-8 overflow-y-auto custom-scrollbar">
          {/* DATE */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined text-xl">
                calendar_month
              </span>
              <h3 className="font-bold tracking-wide uppercase text-sm text-accent">
                Select Date
              </h3>
            </div>
            <div className="bg-white/5 rounded-xl p-4 border border-white/5 flex justify-center">
              <calendar-date
                ref={calendarRef}
                className="cally bg-white/5 border border-base-300 shadow-lg rounded-box text-white"
              >
                <svg
                  aria-label="Previous"
                  className="fill-current size-4"
                  slot="previous"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path fill="currentColor" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
                <svg
                  aria-label="Next"
                  className="fill-current size-4"
                  slot="next"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path fill="currentColor" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                <calendar-month />
              </calendar-date>
            </div>
            {errors.date && (
              <p className="text-red-400 text-xs">{errors.date}</p>
            )}
          </div>

          {/* TIME */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined text-xl">
                schedule
              </span>
              <h3 className="font-bold tracking-wide uppercase text-sm text-accent">
                Choose Time
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {TIME_SLOTS.map(({ label, available }) => (
                <button
                  key={label}
                  disabled={!available}
                  onClick={() => handleTimeSelect(label)}
                  className={`px-5 py-3 rounded-lg text-sm font-medium flex-1 min-w-[120px] text-center transition-all
                    ${
                      !available
                        ? "bg-white/5 border border-white/10 text-white opacity-50 cursor-not-allowed"
                        : formTestDrive.time === label
                          ? "bg-primary border border-primary text-black font-bold"
                          : "bg-white/5 border border-white/10 text-white hover:border-primary/50"
                    }`}
                >
                  {label}
                </button>
              ))}
            </div>
            {errors.time && (
              <p className="text-red-400 text-xs">{errors.time}</p>
            )}
          </div>

          {/* EXPERIENCE */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-accent">
              <span className="material-symbols-outlined text-xl">
                settings_input_component
              </span>
              <h3 className="font-bold tracking-wide uppercase text-sm">
                Experience Preference
              </h3>
            </div>
            <div className="flex gap-4">
              {[
                { value: "guided", label: "Guided", sub: "With a specialist" },
                { value: "solo", label: "Solo", sub: "Express experience" },
              ].map((opt) => (
                <label key={opt.value} className="flex-1 cursor-pointer">
                  <input
                    className="hidden peer"
                    name="mode"
                    type="radio"
                    value={opt.value}
                    checked={formTestDrive.experience === opt.value}
                    onChange={() => handleExperience(opt.value)}
                  />
                  <div className="p-4 rounded-xl border border-white/10 bg-white/5 peer-checked:border-[#00C79F] peer-checked:bg-[#00C79F]/20 transition-all">
                    <p className="font-bold text-sm text-white">{opt.label}</p>
                    <p className="text-xs text-zinc-500">{opt.sub}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between">
          <button
            onClick={closeModal}
            className="flex items-center gap-2 text-zinc-500 font-bold hover:text-white transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined">close</span>
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="group cursor-pointer flex items-center gap-3 bg-[#00C79F] hover:bg-primary/90 text-black px-10 py-4 rounded-lg font-bold transition-all shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Booking..." : "Confirm Booking"}
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
