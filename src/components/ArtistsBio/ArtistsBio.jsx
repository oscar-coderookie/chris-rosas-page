import React from "react";
import "./ArtistsBio.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import NeonBanner from "../../components/NeonBanner/NeonBanner";

const Biography = ({ biography }) => {
  return (
    <Carousel
      className="bio-carousel"
      showStatus={false}
      infiniteLoop={true}
      showThumbs={false}
      renderThumbs={false}
    >
      {biography.map((bio, index) => {
        return (
          <div className="bio-slide" key={index}>
            <p className="bio-paragraph">{bio.text}</p>
          </div>
        );
      })}
    </Carousel>
  );
};

const ArtistsBio = ({ name, biography }) => {
  return (
    <div className="artists-bio">
      <NeonBanner title={name} />
      <Biography biography={biography} />
    </div>
  );
};

export default ArtistsBio;
