import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import global_es from './locales/es/global.json';
import global_en from './locales/en/global.json';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'es',
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
