import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const BASE_CURRENCY = "USD";

const currencyMap = {
  "es-CO": "COP",
  es: "COP",
  "en-US": "USD",
  en: "USD",
};

export const useCurrency = () => {
  const { i18n } = useTranslation();
  const locale = i18n.language ?? "en";
  const targetCurrency = currencyMap[locale] ?? "USD";

  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(targetCurrency !== BASE_CURRENCY);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (targetCurrency === BASE_CURRENCY) return;

    const controller = new AbortController();

    setLoading(true);
    setError(null);

    fetch(`https://api.exchangerate-api.com/v4/latest/${BASE_CURRENCY}`, {
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) throw new Error("Error al obtener tasas de cambio");
        return res.json();
      })
      .then((data) => setRates(data.rates))
      .catch((err) => {
        if (err.name === "AbortError") return;
        setError(err.message);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [targetCurrency]);

  const format = (priceInUSD) => {
    const rate = rates[targetCurrency] ?? 1;
    const converted = priceInUSD * rate;

    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: targetCurrency,
      minimumFractionDigits: 0,
    }).format(converted);
  };

  return { format, loading, error };
};