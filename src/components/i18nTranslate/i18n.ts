import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en, cn } from "./resources";


const DEFAULT_LANGUAGE = "cn";

export default i18n.use(initReactI18next).init({

resources:{
    en:{
        translation:en
    },
    cn:{
        translation:cn
    }
},
lng: DEFAULT_LANGUAGE,
fallbackLng: DEFAULT_LANGUAGE,
keySeparator: ".",
interpolation: {
  escapeValue: false
}
})

