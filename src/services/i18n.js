import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";



// localization is available for any language and any number of languages.


i18next 
// passes the i18n instance to react-i18next
.use(initReactI18next)
// init i18next
// view configuration options @ https://www.i18next.com/overview/configuration-options
.use(HttpApi) // register the back-end plugin
.init({
    lng: "ar",
    interpolation: {
        escapeValue: false,
    },
    debug: process.env.NODE_ENV === "development",
});
   
export default i18next;