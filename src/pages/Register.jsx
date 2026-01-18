import { useState } from "react";
import { useAuthUser } from "../hooks/useAuthUser";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Register = () => {
  const { signUpNewUser } = useAuthUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Email y contraseña son obligatorios");
      return;
    }

    setLoading(true);

    try {
      await signUpNewUser(email, password);
      toast.success("Usuario registrado correctamente");
      navigate("/");
    } catch (error) {
      toast.error(error.message || "Error al registrar usuario");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <main className="flex w-full min-h-screen font-display bg-white">
        {/* LEFT SECTION */}
        <section className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAUPkaWhL28AXDlUqiGfaAnR1B7j0ZlL_wZHqNH06TSuKAEOxhbAmWfhpCqEALucQXLv3mQ1amzSPwpx-e4JhBqshDiSXsN9Amb6k0MAVTJv8IydERw1aLXkIWfisR4lGqZK7115PRwqkiRUvxxfqDnznCSqRd1FWpZzk_nKh9xVCajAXiFa9iP_mgmePRq9cYUiQB_FENHBw3d9e16kxj0RCbaMI1zU4LofeEomLVaDY7yROohtZZVLaOvhz2N-GKQl7DpcC7Mm1c')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-apex-dark/80 via-apex-dark/20 to-transparent"></div>
          </div>

          <div className="relative z-10 p-16 flex flex-col justify-between w-full h-full">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold tracking-tighter text-white">
                MONZA MOTORS
              </h2>
            </div>

            <div className="max-w-md">
              <h1 className="text-6xl font-bold text-accent tracking-tighter mb-6 leading-none">
                JOIN THE <br /> INNER CIRCLE
              </h1>
              <p className="text-gray-300 text-xl font-medium leading-relaxed">
                Access exclusive vehicle releases, member-only track events, and
                personalized automotive services tailored for the discerning
                driver.
              </p>
            </div>

            <div className="flex items-center gap-4 text-white/60 text-sm tracking-widest uppercase">
              <span>Est. 1998</span>
              <span className="w-12 h-px bg-white/20"></span>
              <span>Automotive Excellence</span>
            </div>
          </div>
        </section>

        {/* RIGHT SECTION */}
        <section className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16">
          <div className="w-full max-w-md">
            <div className="mb-10 lg:hidden flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-3xl">
                flare
              </span>
              <h2 className="text-xl font-bold tracking-tighter">
                APEX MOTORS
              </h2>
            </div>

            <header className="mb-10">
              <h2 className="text-3xl font-bold tracking-tight mb-2 text-accent">
                Create your account
              </h2>
              <p className="text-gray-500">
                Welcome to the pinnacle of luxury mobility.
              </p>
            </header>

            {/* FORM */}
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                  Email Address
                </label>
                <input
                  className="w-full px-4 py-3 bg-apex-gray rounded-xl form-input-focus"
                  placeholder="julian@example.com"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                  Password
                </label>
                <input
                  className="w-full px-4 py-3 bg-apex-gray rounded-xl form-input-focus"
                  placeholder="••••••••"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                disabled={loading}
                className="w-full py-4 bg-[#00D3BB] text-apex-dark font-bold uppercase tracking-widest rounded-xl hover:shadow-lg hover:text-white hover:shadow-primary/20 transition-all active:scale-[0.98]"
              >
                Register
              </button>
            </form>
            <Link to="/login" className="w-100 hover:text-accent">
              Ya tienes cuenta?
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};
