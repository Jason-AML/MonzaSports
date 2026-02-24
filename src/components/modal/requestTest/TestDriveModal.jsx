export const TestDriveModal = ({ closeModal, data }) => {
  return (
    <>
      {/*Modal Overlay Container*/}
      {/*Main Modal Window*/}
      <div className="glass-panel bg-[#191B1F] w-full max-w-6xl rounded-xl shadow-2xl overflow-scroll flex flex-col md:flex-row min-h-175">
        {/*Left Column: Vehicle Summary*/}
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
                data-alt="front profile of a white Porsche Taycan"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuATLBu3s7C3XrSz_I5GdDBJfZjVB763ZSUMgfjlc1ZX8M0jIBbigHArw6e91mYakri01eVf74NuXExB-JDHUvVYviUs7jE0lr-DVF6_ch7VPkd0utUqWFX39edwa3rtb22IlTL7xRICbuOLnKcwVlqjF8Tx1xS7w0XdrS3iHl3-uQTBaqBXe_VSzWbocSWu_esK8tzG3D2HGOF7gyY7q5nOQq8GKOPc6ePzUJXvQ5xejRukl_FNd0Wo4LC9rWj7dQBnyfpZfxbv060')",
                }}
              ></div>
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
        {/*Right Column: Multi-Step Interaction Panel*/}
        <div className="w-full md:w-7/12 p-8 lg:p-12 flex flex-col bg-zinc-900/30">
          <div className="flex-1 flex flex-col gap-8 custom-scrollbar overflow-y-auto">
            {/*Section: Date Selection*/}
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
                {/*Calendar Header*/}
                <calendar-date className="cally bg-white/5 border border-base-300 shadow-lg rounded-box text-white">
                  <svg
                    aria-label="Previous"
                    className="fill-current size-4"
                    slot="previous"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M15.75 19.5 8.25 12l7.5-7.5"
                    ></path>
                  </svg>
                  <svg
                    aria-label="Next"
                    className="fill-current size-4"
                    slot="next"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    ></path>
                  </svg>
                  <calendar-month></calendar-month>
                </calendar-date>
              </div>
            </div>
            {/*Section: Time Selection*/}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary">
                <span className="material-symbols-outlined text-xl">
                  schedule
                </span>
                <h3 className="font-bold tracking-wide uppercase text-sm text-accent">
                  Choose Time
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 text-white">
                <button className="px-5 py-3 rounded-lg bg-white/5 border border-white/10 text-sm font-medium hover:border-primary/50 transition-all flex-1 min-w-[120px] text-center">
                  09:00 AM
                </button>
                <button className="px-5 py-3 rounded-lg bg-primary border border-primary text-black font-bold text-sm flex-1 min-w-[120px] text-center">
                  10:30 AM
                </button>
                <button className="px-5 py-3 rounded-lg bg-white/5 border border-white/10 text-sm font-medium hover:border-primary/50 transition-all flex-1 min-w-[120px] text-center">
                  01:00 PM
                </button>
                <button className="px-5 py-3 rounded-lg bg-white/5 border border-white/10 text-sm font-medium hover:border-primary/50 transition-all flex-1 min-w-[120px] text-center">
                  02:30 PM
                </button>
                <button className="px-5 py-3 rounded-lg bg-white/5 border border-white/10 text-sm font-medium hover:border-primary/50 transition-all flex-1 min-w-[120px] text-center">
                  04:00 PM
                </button>
                <button className="px-5 py-3 rounded-lg bg-white/5 border border-white/10 text-sm font-medium hover:border-primary/50 transition-all flex-1 min-w-[120px] text-center opacity-50 cursor-not-allowed">
                  05:30 PM
                </button>
              </div>
            </div>
            {/*Section: Preferences (Subtle Context)*/}
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
                <label className="flex-1 cursor-pointer">
                  <input className="hidden peer" name="mode" type="radio" />
                  <div className="p-4 rounded-xl border border-white/10 bg-white/5 peer-checked:border-[#00C79F] peer-checked:bg-[#00C79F]/20 transition-all">
                    <p className="font-bold text-sm text-white">Guided</p>
                    <p className="text-xs text-zinc-500">With a specialist</p>
                  </div>
                </label>
                <label className="flex-1 cursor-pointer">
                  <input className="hidden peer" name="mode" type="radio" />
                  <div className="p-4 rounded-xl border border-white/10 bg-white/5 peer-checked:border-[#00C79F] peer-checked:bg-[#00C79F]/20 transition-all">
                    <p className="font-bold text-sm text-white">Solo</p>
                    <p className="text-xs text-zinc-500">Express experience</p>
                  </div>
                </label>
              </div>
            </div>
          </div>
          {/*Footer CTA*/}
          <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between">
            <button
              onClick={closeModal}
              className="flex items-center gap-2 text-zinc-500 font-bold hover:text-white transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined">close</span>
              Cancel
            </button>
            <button className="group cursor-pointer flex items-center gap-3 bg-[#00C79F] hover:bg-primary/90 text-black px-10 py-4 rounded-lg font-bold transition-all shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 w-35 sm:w-auto">
              Confirm Booking
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </div>
      ;
    </>
  );
};
