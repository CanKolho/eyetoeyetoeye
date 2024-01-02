import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)  
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: ["fi", "en", "sv"],

    debug: true,
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    backend: {
      loadPath: '/eyetoeyetoeye/locales/{{lng}}/translation.json'
  }
  });

export default i18n;
