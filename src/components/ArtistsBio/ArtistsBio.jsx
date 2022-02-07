import React from "react";
import "./ArtistsBio.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Biography = ({p1, p2, p3}) => {
  return (
    <Carousel className="bio-carousel" showStatus={false}>
      <div>
        <p className="bio-paragraph">{p1}</p>
      </div>
      <div>
        <p className="bio-paragraph">{p2}</p>
      </div>
      <div>
        <p className="bio-paragraph">{p3}</p>
      </div>
    </Carousel>
  );
};

const ArtistsBio = ({ name, text1, text2, text3 }) => {
  return (
    <div className="artists-bio">
      <h2 className="artists-bio__title">{name}</h2>
      <Biography
      p1={text1}
      p2={text2}
      p3={text3}
      />
    </div>
  );
};

export default ArtistsBio;
