import React from "react";
import "./TraductionFlags.scss";
import i18n from 'i18next';
import { useTranslation } from "react-i18next";
import spain from "./../../assets/img/spain.png";
import uk from "./../../assets/img/uk.png";

const TraductionFlags = () => {

 const [t, i18n] = useTranslation("global")

  return (
    <div className="traduction-flags">
      <button
        className="traduction-flags__btn"
        onClick={() => i18n.changeLanguage("es")}
      >
        <img src={spain} alt="spain-flag" />
      </button>
      <button
        className="traduction-flags__btn"
        onClick={() => i18n.changeLanguage("en")}
      >
        <img src={uk} alt="uk-flag" />
      </button>
    </div>
  );
};

export default TraductionFlags;
