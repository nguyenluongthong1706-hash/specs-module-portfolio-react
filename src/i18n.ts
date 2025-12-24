import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { VI_LOCALE } from "@/constants/locales/vi";
import { EN_LOCALE } from "@/constants/locales/en";

i18n.use(initReactI18next).init({
  resources: {
    vi: { translation: VI_LOCALE },
    en: { translation: EN_LOCALE },
  },
  lng: "vi", // Ngôn ngữ mặc định
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;