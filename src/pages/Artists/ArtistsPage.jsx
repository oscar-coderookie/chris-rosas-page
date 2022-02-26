import React from "react";
import "./ArtistsPage.scss";
import { NavLink } from "react-router-dom";
import { NeonBanner, SpinnerLoader } from "../../components";

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <SpinnerLoader />
    </div>
  );
};

const ArtistsPage = ({ artists }) => {
  return (
    <div className="artists-page">
      <NeonBanner title="Artistas" />
      <div className="artists-page__container">
        {artists === null ? (
          <LoadingScreen/>
        ) : (
          artists.map((artist) => {
            return (
              <NavLink to={`/artists/${artist.id}`} key={artist.nombre}>
                <div className="artists-page__img-container">
                  <img
                    src={artist.avatar}
                    alt={artist.nombre}
                    className="artists-page__img"
                  />
                  <h2 className="artists-page__img-legend">{artist.nombre}</h2>
                </div>
              </NavLink>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ArtistsPage;
