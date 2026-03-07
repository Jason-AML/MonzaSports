import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import es from "./translations/es";
import en from "./translations/en";

i18n.use(initReactI18next).init({
  resources: {
    es: { translation: es },
    en: { translation: en },
  },
  lng: "es", // idioma por defecto
  fallbackLng: "en", // si falta una clave, usa inglés
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
