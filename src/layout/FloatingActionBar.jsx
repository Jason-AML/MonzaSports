export const FloatingActionBar = () => {
  return (
    <>
      {/*Optional Bottom Action Bar (Floating Navigation Hint)*/}
      <div className="fixed bottom-10 inset-x-0 flex justify-center z-1000">
        <div
          className=" items-center gap-4 bg-zinc-900/80 backdrop-blur-md px-6 py-3
                  rounded-full border border-white/10 shadow-2xl
                  opacity-60 hover:opacity-100 transition-opacity
                  hidden lg:flex"
        >
          <span className="text-xs text-zinc-400 font-bold uppercase tracking-widest">
            Need help?
          </span>
          <div className="h-4 w-px bg-white/20"></div>
          <a className="text-xs font-bold text-white hover:underline" href="#">
            Contact Concierge
          </a>
          <div className="h-4 w-px bg-white/20"></div>
          <a className="text-xs font-bold text-white hover:underline" href="#">
            Chat Now
          </a>
        </div>
      </div>
    </>
  );
};
