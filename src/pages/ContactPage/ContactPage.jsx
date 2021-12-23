import React from "react";
import { SocialNetworks } from "../../components";
import "./ContactPage.scss";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1 className="contact-page__title">Contacto</h1>
      <div className="contact-page__info">
        <div className="contact-page__email">
          <h4>
            Si te interesan mis servicios como mánager, no dudes en contactarme
            por cualquiera de las siguientes formas:
          </h4>
          <a href="mailto:chris@chrisrosas.com">
            <span className="fas fa-envelope-open-text"></span>{" "}
          </a>
          <p>Déjame un correo electrónico</p>
        </div>
        <div className="contact-page__email">
          <SocialNetworks />
          <p>O en cualquiera de mis redes sociales</p>
        </div>
        <div className="contact-page__email">
          <span className="fas fa-map-marked-alt"></span>
          <p>29010 - Málaga, España </p>
        </div>
        
      </div>
    </div>
  );
};

export default ContactPage;
