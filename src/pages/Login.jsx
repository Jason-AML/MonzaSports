import { useState } from "react";
import { useAuthUser } from "../hooks/useAuthUser";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

export const Login = () => {
  const { t } = useTranslation();
  const { signUpUser } = useAuthUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signUpUser(email, password);
      setLoading(false);
      toast.success(t("login.toast.succes"));
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(t("login.toast.error"));
    } finally {
      setLoading(false);
      setEmail("");
      setPassword("");
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
                {t("login.join_title")}
              </h1>
              <p className="text-gray-300 text-xl font-medium leading-relaxed">
                {t("login.join_subtitle")}
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
              <h2 className="text-xl font-bold tracking-tighter">
                MONZA MOTORS
              </h2>
            </div>

            <header className="mb-10">
              <h2 className="text-3xl font-bold tracking-tight mb-2 text-accent">
                {t("login.title")}
              </h2>
              <p className="text-gray-500">{t("login.subtitle")}</p>
            </header>

            {/* FORM */}
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-black mb-2">
                  {t("login.email_label")}
                </label>
                <input
                  className="w-full px-4 py-3 bg-apex-gray rounded-xl text-black form-input-focus"
                  placeholder="julian@example.com"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-black mb-2">
                  {t("login.password_label")}
                </label>
                <input
                  className="w-full px-4 py-3 bg-apex-gray rounded-xl text-black form-input-focus"
                  placeholder="••••••••"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                disabled={loading}
                className="w-full py-4 bg-[#00D3BB] text-apex-dark font-bold uppercase tracking-widest rounded-xl hover:shadow-lg hover:text-white hover:shadow-primary/20 transition-all active:scale-[0.98]"
              >
                {t("login.btn")}
              </button>
            </form>
            <div className=" flex justify-between text-black">
              <Link to="/register" className=" hover:text-accent pt-5">
                {t("login.no_account")}
              </Link>
              <Link to="/" className=" hover:text-accent pt-5">
                {t("login.back_home")}
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
