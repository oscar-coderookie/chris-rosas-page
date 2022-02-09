import React from "react";
import "./ArtistsPage.scss";
import daddyAvatar from "./../../assets/img/daddy-slide.jpg";
import ñengoAvatar from "./../../assets/img/ñengo-slide.jpg";
import nattiAvatar from "./../../assets/img/natti-slide.jpg";
import { NavLink } from "react-router-dom";
import { NeonBanner } from "../../components";

const ArtistsPage = () => {
  return (
    <div className="artists-page">
      <NeonBanner title="Artistas"/>
      <div className="artists-page__container">
        <NavLink exact to="/daddy-yankee">
          <div className="artists-page__img-container">
            <img
              className="artists-page__img"
              src={daddyAvatar}
              alt="daddy-avatar"
            />
            <h2 className="artists-page__img-legend">Daddy Yankee</h2>
          </div>
        </NavLink>

        <NavLink exact to="/nengo">
          <div className="artists-page__img-container">
            <img
              className="artists-page__img"
              src={ñengoAvatar}
              alt="ñengo-avatar"
            />
            <h2 className="artists-page__img-legend">Ñengo Flow</h2>
          </div>
        </NavLink>
        <NavLink exact to="/natti">
          <div className="artists-page__img-container">
            <img
              className="artists-page__img"
              src={nattiAvatar}
              alt="natti-avatar"
            />
            <h2 className="artists-page__img-legend">Natti Natasha</h2>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default ArtistsPage;
