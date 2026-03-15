import React from "react";
import './WhatsappBtn.scss';
import phoneLogo from "./../../assets/img/button-chat.png"

const WhatsappBtn = () => {
  return (
    <React.Fragment>
      <a
        href="https://api.whatsapp.com/send?phone=+17868489893"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="whatsapp" src={phoneLogo} alt="whatsapp" />
      </a>
    </React.Fragment>
  );
};

export default WhatsappBtn;
