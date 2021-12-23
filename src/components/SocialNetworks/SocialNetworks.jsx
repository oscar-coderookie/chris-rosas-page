import React from "react";
import "./SocialNetworks.scss";

const SocialNetworks = () => {
  return (
    <div className="social-networks">
      <div className="social-networks__container">
        <a
          href="https://www.instagram.com/chrisrosasentertainment/?hl=es"
          target="_blank"
          rel="noreferrer"
        >
          <span className="fab fa-instagram"></span>
        </a>
      </div>
      <div className="social-networks__container">
        <a
          href="https://www.facebook.com/cristobal.rosas.50"
          target="_blank"
          rel="noreferrer"
        >
          <span className="fab fa-facebook"></span>
        </a>
      </div>
      <div className="social-networks__container">
      <a
          href="#"
          target="_blank"
          rel="noreferrer"
        >
        <span className="fab fa-twitter"></span>
        </a>
        
      </div>
    </div>
  );
};

export default SocialNetworks;
