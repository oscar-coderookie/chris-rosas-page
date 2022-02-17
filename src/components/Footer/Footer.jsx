import React from "react";
import "./Footer.scss";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="footer">
      <p>{t("footer.copyright")}</p>
      <p>Chris Rosas Entertainment®</p>
    </div>
  );
};

export default Footer;
