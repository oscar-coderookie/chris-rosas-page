import React from "react";
import "./SocialBar.scss";

const SocialBar = ({
  igFollowers,
  ytFollowers,
  ytLink,
  igLink,
  ttLink,
  ttFollowers,
  onScroll
}) => {
  return (
    <div className="social-bar__background" onScroll={onScroll}>
      <div className="social-bar">
        <h2 className="social-bar__title">Seguidores en plataformas:</h2>
        <div className="social-bar__block">

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
          <div className="social-bar__element">
            <a href={ttLink} target="_blank" rel="no-referrer">
              <span className="social-bar__icon fab fa-tiktok"></span>
            </a>
            <h4 className="social-bar__legend">{ttFollowers}</h4>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SocialBar;
