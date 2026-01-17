import { useState } from "react";
import { Layout } from "../layout/Layout";

export const Reservation = () => {
  const [selectLocation, setSelectLocation] = useState(0);
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 py-12 lg:px-12 lg:py-16 ">
        {/*Page Heading Component*/}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-primary text-sm">
              lock
            </span>
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-primary">
              Secure Transaction Environment
            </span>
          </div>
          <h2 className="serif-title text-4xl lg:text-5xl font-bold mb-4 text-accent">
            Vehicle Reservation Checkout
          </h2>
          <p className="text-white/60 max-w-2xl text-lg font-light">
            Complete your acquisition. This session is encrypted and monitored
            for your security.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/*Left Column: Order Summary (40%)*/}
          <aside className="lg:col-span-5 space-y-8 order-2 lg:order-1">
            <div className="bg-surface-dark/50 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm">
              {/*Card Component (Modified)*/}
              <div
                className="relative aspect-[16/10] bg-cover bg-center"
                data-alt="Sleek black 2024 Taycan Turbo S side profile"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDks24-o1mlOZuLdtUkEIGOS6ApsNU21wrs4o-qPCTW_AQHbi1AZBm53oAy2H76ZMBghV2H1mo2XYlB1jMthIoA6wGXYpb9TxnXYt-Qv2gA1BgrmDRRqTvz5wMcVJseKL0IVcZC_6cD-YSI5U9oGGZsJ2C9HPQgDqt18E5ky6LaJsIgBgwTyQz3KHXj2v0EAK6k8dBFWTkSBebWHjT5Ck4CaStRGABI82DkNdJZDy__csruLhglpi8m2EOhpZiG3qUj4z6UxcBw30M')",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <span className="bg-primary/90 text-background-dark text-[10px] font-bold px-2 py-1 rounded-sm mb-2 inline-block">
                    RESERVED FOR YOU
                  </span>
                  <h3 className="serif-title text-2xl font-bold text-white">
                    2024 Taycan Turbo S
                  </h3>
                </div>
              </div>
              <div className="p-8 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">
                      Exterior Color
                    </p>
                    <p className="text-sm font-medium">Jet Black Metallic</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">
                      Interior Trim
                    </p>
                    <p className="text-sm font-medium">
                      Executive Slate Leather
                    </p>
                  </div>
                </div>
                {/*DescriptionList Component (Modified)*/}
                <div className="border-t border-white/10 pt-6 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white/60 text-sm">
                      Vehicle Base Price
                    </span>
                    <span className="text-white font-medium">$185,000.00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/60 text-sm">
                      Custom Configuration
                    </span>
                    <span className="text-white font-medium">$9,900.00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/60 text-sm">
                      Logistics &amp; Handling
                    </span>
                    <span className="text-white font-medium">$1,450.00</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-white/5">
                    <span className="text-white font-bold">
                      Total Vehicle Price
                    </span>
                    <span className="text-white font-bold">$196,350.00</span>
                  </div>
                </div>
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 flex justify-between items-center">
                  <div>
                    <p className="text-primary font-bold text-lg leading-tight">
                      Reservation Fee
                    </p>
                    <p className="text-[10px] text-primary uppercase tracking-widest mt-1">
                      Deductible from total
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-primary font-black text-2xl">
                      $2,500.00
                    </p>
                    <p className="text-[10px] text-white/40 uppercase">
                      Payable Today
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/5">
              <span className="material-symbols-outlined text-white/40">
                verified_user
              </span>
              <p className="text-xs text-white/60 leading-relaxed">
                Your reservation locks the current price and priority build slot
                for 72 hours. Our concierge will contact you within 4 business
                hours to finalize lease or financing arrangements.
              </p>
            </div>
          </aside>
          {/*Right Column: Form (60%)*/}
          <form className="lg:col-span-7 bg-surface-dark border border-white/10 rounded-xl p-8 lg:p-12 shadow-2xl order-1 lg:order-2">
            {/*Section 1: Contact Information*/}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="size-8 rounded-full border border-primary text-accent flex items-center justify-center text-xs font-bold">
                  1
                </div>
                <h3 className="serif-title text-xl font-bold uppercase tracking-wide text-accent">
                  Contact Information
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-widest text-white/50 font-bold">
                    Full Legal Name
                  </label>
                  <input
                    className="w-full bg-background-dark border border-white/10 rounded-lg px-4 py-3 text-sm form-input-focus transition-all"
                    placeholder="Johnathan Doe"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-widest text-white/50 font-bold">
                    Phone Number
                  </label>
                  <input
                    className="w-full bg-background-dark border border-white/10 rounded-lg px-4 py-3 text-sm form-input-focus transition-all"
                    placeholder="+1 (555) 000-0000"
                    type="tel"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[11px] uppercase tracking-widest text-white/50 font-bold">
                    Email Address
                  </label>
                  <input
                    className="w-full bg-background-dark border border-white/10 rounded-lg px-4 py-3 text-sm form-input-focus transition-all"
                    placeholder="john@example.com"
                    type="email"
                  />
                </div>
              </div>
            </div>
            {/*Section 2: Pickup Location*/}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="size-8 rounded-full border border-primary text-accent flex items-center justify-center text-xs font-bold">
                  2
                </div>
                <h3 className="serif-title text-xl font-bold uppercase tracking-wide text-accent">
                  Pickup Location
                </h3>
              </div>
              <div className="space-y-4">
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 inset-y-0 flex items-center text-accent pointer-events-none">
                    search
                  </span>

                  <input
                    className="w-full bg-background-dark border border-white/10 rounded-lg
               pl-12 pr-4 h-12 text-sm
               focus:ring-primary focus:border-primary transition-all"
                    placeholder="Search by city or zip code"
                    type="text"
                  />
                </div>
                <div className="grid grid-cols-1 gap-3">
                  <label className="relative flex items-center p-4 bg-background-dark border border-primary rounded-lg cursor-pointer group ">
                    <input
                      checked=""
                      className="sr-only"
                      name="location"
                      type="radio"
                    />
                    <div className="flex-1 ">
                      <p className="text-sm font-bold text-accent">
                        Premium Motors - Beverly Hills
                      </p>
                      <p className="text-xs text-white/50 ">
                        9460 Wilshire Blvd, Beverly Hills, CA 90212
                      </p>
                    </div>
                    <div className="size-5 rounded-full border-2 border-primary flex items-center justify-center">
                      <div className="size-2.5 bg-primary rounded-full"></div>
                    </div>
                  </label>
                  <label className="relative flex items-center p-4 bg-background-dark border border-white/10 rounded-lg cursor-pointer hover:border-white/30 transition-all">
                    <input className="sr-only" name="location" type="radio" />
                    <div className="flex-1">
                      <p className="text-sm font-bold text-accent">
                        Premium Motors - Santa Monica
                      </p>
                      <p className="text-xs text-white/50">
                        1501 Ocean Ave, Santa Monica, CA 90401
                      </p>
                    </div>
                    <div className="size-5 rounded-full border border-white/20"></div>
                  </label>
                </div>
              </div>
            </div>
            {/*Section 3: Payment Method*/}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="size-8 rounded-full border border-primary text-accent flex items-center justify-center text-xs font-bold">
                  3
                </div>
                <h3 className="serif-title text-xl font-bold uppercase tracking-wide text-accent">
                  Payment Method
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <button
                  className="flex items-center justify-center gap-2 py-4 border border-primary bg-primary/5 rounded-lg"
                  type="button"
                >
                  <span className="material-symbols-outlined text-primary">
                    credit_card
                  </span>
                  <span className="text-sm font-bold text-white">
                    Credit Card
                  </span>
                </button>
                <button
                  className="flex items-center justify-center gap-2 py-4 border border-white/10 hover:border-white/30 rounded-lg transition-all"
                  type="button"
                >
                  <span className="material-symbols-outlined text-white/50">
                    wallet
                  </span>
                  <span className="text-sm font-bold text-white">
                    Apple Pay
                  </span>
                </button>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-widest text-white/50 font-bold">
                    Card Details
                  </label>
                  <div className="relative">
                    <input
                      className="w-full bg-background-dark border border-white/10 rounded-lg px-4 py-3 text-sm form-input-focus transition-all"
                      placeholder="0000 0000 0000 0000"
                      type="text"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-1">
                      <div
                        className="w-8 h-5 bg-slate-700 rounded-sm opacity-50"
                        data-alt="Visa logo placeholder"
                      ></div>
                      <div
                        className="w-8 h-5 bg-slate-700 rounded-sm opacity-50"
                        data-alt="Mastercard logo placeholder"
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] uppercase tracking-widest text-white/50 font-bold">
                      Expiry Date
                    </label>
                    <input
                      className="w-full bg-background-dark border border-white/10 rounded-lg px-4 py-3 text-sm form-input-focus transition-all"
                      placeholder="MM / YY"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] uppercase tracking-widest text-white/50 font-bold">
                      Security Code (CVV)
                    </label>
                    <input
                      className="w-full bg-background-dark border border-white/10 rounded-lg px-4 py-3 text-sm form-input-focus transition-all"
                      placeholder="123"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/*Final Action*/}
            <div className="pt-8 border-t border-white/10">
              <button
                className="w-full bg-[#00D3BB] text-background-dark py-5 rounded-lg font-black uppercase tracking-[0.2em] text-lg hover:bg-yellow-500 transition-all shadow-xl shadow-primary/10 mb-6 group flex items-center justify-center gap-3"
                type="submit"
              >
                <span>Complete Reservation</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward_ios
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};
