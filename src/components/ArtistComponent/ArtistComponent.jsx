import React from "react";
import { ArtistsBio, GalleryArtists, SocialBar } from "..";
import "./ArtistComponent.scss";



const ArtistComponent = ({
  urlHero,
  igFollowers,
  spotyFollowers,
  spotyLink,
  igLink,
  ytFollowers,
  ytLink,
  images,
  name,
biography
}) => {

  return (
    <div className="artist-block">

    <div className="artist-hero">
    <img src={urlHero} alt={urlHero} className="artist-hero" />
    </div>
    
  
      <div className="artist-bio">
        <SocialBar
          igFollowers={igFollowers}
          ytFollowers={ytFollowers}
          spotyFollowers={spotyFollowers}
          ytLink={ytLink}
          igLink={igLink}
          spotyLink={spotyLink}
        />
       { images === null ? null : <div className="artist-gallery">
        <GalleryArtists images={images} />
        </div>}
        <ArtistsBio
        name={name}
        biography={biography}
      />
      </div>
     
    </div>
  );
};

export default ArtistComponent;
