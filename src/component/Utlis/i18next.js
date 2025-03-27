import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import LanguageDetector from 'i18next-browser-languagedetector'
import EnLang from '../Locales/en/translation.json'
import FnLang from '../Locales/fi/translation.json'
import SpLang from '../Locales/swe/translation.json'
import HiLang from '../Locales/hi/translation.json'

const resources = {
    en: {
      translation: EnLang
    },
    fi: {
      translation:FnLang
    },
    swe:{
      translation:SpLang
    },
    hi:{
        translation:HiLang
      }
  };
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    resources,
    interpolation: {
      escapeValue: false // react already safes from xss
    },
   
  });

  export default i18n;