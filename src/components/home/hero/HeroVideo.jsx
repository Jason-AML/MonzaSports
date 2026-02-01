import { Link } from "react-router-dom";
import bgferrari from "../../../assets/ferrari.mp4";

export const HeroVideo = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        {/*Using a high-quality placeholder image representing the video background*/}
        <video
          className="w-full h-full object-cover scale-105"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={bgferrari} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tighter leading-none text-glow">
          PRECISION <br /> IN MOTION.
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl mx-auto font-light">
          Experience the pinnacle of automotive engineering and high-performance
          motorcycles. Designed for those who refuse to follow.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/collections"
            className="px-10 py-4 bg-[#00C79F] text-background-dark font-bold uppercase tracking-widest rounded-lg hover:bg-primary/90 transition-all cursor-pointer"
          >
            Explore Collection
          </Link>
          <button className="px-10 py-4 border border-white/20 hover:border-primary/50 font-bold uppercase tracking-widest rounded-lg transition-all backdrop-blur-sm cursor-pointer">
            Our Legacy
          </button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <span className="material-symbols-outlined text-primary text-[#00C79F]">
          expand_more
        </span>
      </div>
    </section>
  );
};
