import React from "react";
import { SocialNetworks } from "../../components";
import "./ContactPage.scss";
import { useTranslation } from "react-i18next";


const ContactPage = () => {

  const { t, i18n } = useTranslation();

  return (
    <div className="contact-page">
      <h1 className="contact-page__title">{t("Contact.1")}</h1>
      <div className="contact-page__info">
        <div className="contact-page__email">
          <h4>
            {t("Contact-legend.1")}
          </h4>
          <a href="mailto:chris@chrisrosas.com">
            <span className="fas fa-envelope-open-text"></span>{" "}
          </a>
          <p>{t("Leave-email.1")}</p>
        </div>
        <div className="contact-page__email">
          <SocialNetworks />
          <p>{t("Social-networks.1")}</p>
        </div>
        <div className="contact-page__email">
          <span className="fas fa-map-marked-alt"></span>
          <p>{t("Malaga.1")} </p>
        </div>
        
      </div>
    </div>
  );
};

export default ContactPage;
