import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const BASE_CURRENCY = "USD";

export const useCurrency = () => {
  const { i18n } = useTranslation();
  const [rates, setRates] = useState({});

  const currencyMap = {
    "es-CO": "COP",
    es: "COP",
    "en-US": "USD",
    en: "USD",
  };

  const locale = i18n.language ?? "en";
  const targetCurrency = currencyMap[locale] ?? "USD";

  useEffect(() => {
    if (targetCurrency === BASE_CURRENCY) return;

    fetch(`https://api.exchangerate-api.com/v4/latest/${BASE_CURRENCY}`)
      .then((res) => res.json())
      .then((data) => setRates(data.rates))
      .catch(() => console.error("Error al obtener tasas de cambio"));
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

  return { format };
};
