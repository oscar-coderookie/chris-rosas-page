import React from "react";
import "./ArtistsBio.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import NeonBanner from "../../components/NeonBanner/NeonBanner";

const Biography = ({ p1, p2, p3, p4 }) => {
  return (
    <Carousel className="bio-carousel" showStatus={false}>
      <div className="bio-slide">
        <p className="bio-paragraph">{p1}</p>
      </div>
      <div className="bio-slide">
        <p className="bio-paragraph">{p2}</p>
      </div>
      <div className="bio-slide">
        <p className="bio-paragraph">{p3}</p>
      </div>
 
        {p4 === " "? null : <div className="bio-slide">
          <p className="bio-paragraph">{p4}</p>
        </div>}
      
    </Carousel>
  );
};

const ArtistsBio = ({ name, text1, text2, text3, text4 }) => {
  return (
    <div className="artists-bio">
      <NeonBanner title={name} />
      <Biography p1={text1} p2={text2} p3={text3} p4={text4}/>
    </div>
  );
};

export default ArtistsBio;
