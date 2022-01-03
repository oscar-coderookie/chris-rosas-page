import React from "react";
import { SocialNetworks } from "../../components";
import "./ContactPage.scss";
import { useTranslation } from "react-i18next";


const ContactPage = () => {

  const [t, i18n] = useTranslation('global');


  return (
    <div className="contact-page">
      <h1 className="contact-page__title">{t("contact-page.contact")}</h1>
      <div className="contact-page__info">
        <div className="contact-page__email">
          <h4>
            {t("contact-page.legend")}
          </h4>
          <a href="mailto:chris@chrisrosas.com">
            <span className="fas fa-envelope-open-text"></span>{" "}
          </a>
          <p>{t("contact-page.email")}</p>
        </div>
        <div className="contact-page__email">
          <SocialNetworks />
          <p>{t("contact-page.social")}</p>
        </div>
        <div className="contact-page__email">
          <span className="fas fa-map-marked-alt"></span>
          <p>{t("contact-page.malaga")}</p>
        </div>
        
      </div>
    </div>
  );
};

export default ContactPage;
