import React from "react";
import "./ArtistsPage.scss";
import daddyAvatar from "./../../assets/img/daddy-slide.jpg";
import ñengoAvatar from "./../../assets/img/ñengo-slide.jpg";
import nattiAvatar from "./../../assets/img/natti-slide.jpg";
import { NavLink } from "react-router-dom";

const ArtistsPage = () => {
  return (
    <div className="artists-page">
      <h1 className="artists-page__title">Artistas</h1>
      <div className="artists-page__container">
        <NavLink exact to="/daddy-yankee">
          <div className="artists-page__img-container">
            <img
              className="artists-page__img"
              src={daddyAvatar}
              alt="daddy-avatar"
            />
          </div>
        </NavLink>

        <NavLink exact to="/ñengo">
          <div className="artists-page__img-container">
            <img
              className="artists-page__img"
              src={ñengoAvatar}
              alt="ñengo-avatar"
            />
          </div>
        </NavLink>
        <NavLink exact to="/natti">
          <div className="artists-page__img-container">
            <img
              className="artists-page__img"
              src={nattiAvatar}
              alt="natti-avatar"
            />
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default ArtistsPage;