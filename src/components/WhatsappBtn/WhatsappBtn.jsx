import React from "react";
import './WhatsappBtn.scss';
import whatsappLogo from "./../../assets/img/whatsapp-logo.svg"

const WhatsappBtn = () => {
  return (
    <React.Fragment>
      <a
        href="https://api.whatsapp.com/send?phone=+34722355841"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="whatsapp" src={whatsappLogo} alt="whatsapp" />
      </a>
    </React.Fragment>
  );
};

export default WhatsappBtn;
