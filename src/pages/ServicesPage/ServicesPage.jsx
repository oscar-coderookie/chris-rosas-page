import React from "react";
import "./ServicesPage.scss";
import { useTranslation } from "react-i18next";
import { NeonBanner } from "../../components";

const ServicesPage = () => {

  const [t, i18n] = useTranslation("global")

  return (
    <div className="services-page" >
      <div className="services-page__block">
      <NeonBanner title={t("services-page.services-title")}/>
        <ul className="services-page__list">
          <li className="services-page__element">
          {t("services-page.booking")}
          </li>
          <li className="services-page__element">
          {t("services-page.management")}
          </li>
          <li className="services-page__element">
          {t("services-page.production")}
          </li>
          <li className="services-page__element">
          {t("services-page.mixing")}
          </li>
          <li className="services-page__element">
          {t("services-page.vocal")}
          </li>
          <li className="services-page__element">
          {t("services-page.sonwriting")}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ServicesPage;
