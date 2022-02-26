import React from "react";
import "./ArtistsPage.scss";
import { NavLink } from "react-router-dom";
import { NeonBanner } from "../../components";
import { artistsArray } from "../../mocks/artists";

const ArtistsPage = () => {
  return (
    <div className="artists-page">
      <NeonBanner title="Artistas" />
      <div className="artists-page__container">
        {artistsArray.map((artist) => {
          return (
              <NavLink to={artist.link} key={artist.name}>
                <div className="artists-page__img-container">
                  <img
                    src={artist.avatar}
                    alt={artist.name}
                    className="artists-page__img"
                  />
                  <h2 className="artists-page__img-legend">
                    {artist.name}
                  </h2>
                </div>
              </NavLink>
  
          );
        })}
      </div>
    </div>
  );
};

export default ArtistsPage;
