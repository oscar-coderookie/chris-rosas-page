import React from "react";
import "./SocialBar.scss";

const SocialBar = ({ igFollowers, ytFollowers, spotyFollowers }) => {
  return (
    <div className="social-bar">
      <h2 className="social-bar__title">Seguidores:</h2>
      <div className="social-bar__block">
        <div className="social-bar__element">
          <span className="social-bar__icon fab fa-spotify"></span>
          <h4 className="social-bar__legend">{spotyFollowers}</h4>
        </div>
        <div className="social-bar__element">
          <span className="social-bar__icon fab fa-instagram"></span>
          <h4 className="social-bar__legend">{igFollowers}</h4>
        </div>
        <div className="social-bar__element">
          <span className="social-bar__icon fab fa-youtube"></span>
          <h4 className="social-bar__legend">{ytFollowers}</h4>
        </div>
      </div>
    </div>
  );
};

export default SocialBar;
