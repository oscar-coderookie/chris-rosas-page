import React from "react";
import "./TraductionFlags.scss";
import { useTranslation } from "react-i18next";
import spain from "./../../assets/img/spain.png";
import uk from "./../../assets/img/uk.png";

const TraductionFlags = () => {
  const { t,i18n } = useTranslation();

  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="traduction-flags">
      <button
        className="traduction-flags__btn"
        onClick={() => handleClick("en")}
      >
        <img src={spain} alt="spain-flag" />
      </button>
      <button
        className="traduction-flags__btn"
        onClick={() => handleClick("es")}
      >
        <img src={uk} alt="uk-flag" />
      </button>
    </div>
  );
};

export default TraductionFlags;
