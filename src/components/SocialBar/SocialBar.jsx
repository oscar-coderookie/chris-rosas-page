import React from "react";
import "./SocialBar.scss";

const SocialBar = ({
  igFollowers,
  ytFollowers,
  spotyFollowers,
  spotyLink,
  ytLink,
  igLink,
}) => {
  return (
    <div className="social-bar">
      <h2 className="social-bar__title">Seguidores:</h2>
      <div className="social-bar__block">
        <div className="social-bar__element">
          <a href={spotyLink} target="_blank" rel="no-referrer">
            <span className="social-bar__icon fab fa-spotify"></span>
          </a>
          <h4 className="social-bar__legend">{spotyFollowers}</h4>
        </div>
        <div className="social-bar__element">
          <a href={igLink} target="_blank" rel="no-referrer">
            <span className="social-bar__icon fab fa-instagram"></span>
          </a>
          <h4 className="social-bar__legend">{igFollowers}</h4>
        </div>
        <div className="social-bar__element">
          <a href={ytLink} target="_blank" rel="no-referrer">
            <span className="social-bar__icon fab fa-youtube"></span>
          </a>
          <h4 className="social-bar__legend">{ytFollowers}</h4>
        </div>
      </div>
    </div>
  );
};

export default SocialBar;
