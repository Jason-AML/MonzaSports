import { useState } from "react";

export const Calculator = ({ price }) => {
  const [month, setMonth] = useState("60");
  const totalFinancing_Estimator = Math.round(price / month);
  return (
    <div className="bg-panel-dark/40 border border-border-dark rounded-xl p-6 backdrop-blur-sm">
      <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
        <span className="material-symbols-outlined text-accent text-lg">
          calculate
        </span>
        Financing Estimator
      </h4>
      <div className="space-y-4">
        <div>
          <label className="text-[10px] text-slate-500 uppercase font-bold mb-1 block">
            Down Payment
          </label>
          <div className="relative">
            <span className="absolute left-3 inset-y-0 flex items-center text-white pointer-events-none">
              $
            </span>
            <input
              className="w-full h-10 bg-background-dark/50 border border-border-dark rounded
               focus:ring-primary focus:border-primary text-sm pl-7 text-white"
              type="text"
              value={price}
              readOnly
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-[10px] text-slate-500 uppercase font-bold mb-1 block">
              Term (Months)
            </label>
            <select
              onChange={(e) => setMonth(Number(e.target.value))}
              value={month}
              className="w-full bg-[#0A0A0A] border-border-dark rounded focus:ring-primary focus:border-primary text-sm text-white"
            >
              <option value="48">48</option>
              <option value="60">60</option>
              <option value="72">72</option>
            </select>
          </div>
          <div>
            <label className="text-[10px] text-slate-500 uppercase font-bold mb-1 block">
              Est. APR
            </label>
            <input
              className="w-full bg-background-dark/50 border-border-dark rounded focus:ring-primary focus:border-primary text-sm text-white text-center"
              type="text"
              value="4.9%"
              readOnly
            />
          </div>
        </div>
        <div className="pt-4 mt-4 border-t border-border-dark flex justify-between items-center">
          <span className="text-slate-400 text-xs uppercase font-bold">
            Estimated Monthly
          </span>
          <span className="text-white text-xl font-bold">
            ${totalFinancing_Estimator}
            <span className="text-xs text-slate-500">/mo</span>
          </span>
        </div>
      </div>
    </div>
  );
};
