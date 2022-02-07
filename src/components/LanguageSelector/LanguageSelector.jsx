import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="language-selector">
      <select>
        <option value="ES" onSelect={() => i18n.changeLanguage("es")}></option>
        <option value="EN" onSelect={() => i18n.changeLanguage("en")}></option>
      </select>
    </div>
  );
};

export default LanguageSelector;
