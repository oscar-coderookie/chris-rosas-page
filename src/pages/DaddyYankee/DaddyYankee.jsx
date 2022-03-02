import React from "react";
import { SocialBar, GalleryArtists, ArtistsBio } from "../../components";
import "./DaddyYankee.scss";
import { biographyDaddy, imagesDaddy } from "../../mocks/daddy";

const DaddyYankee = () => {
  return (
    <div className="daddy">
      <div className="daddy-yankee__hero"></div>
      <div className="daddy-yankee__bio">
        <SocialBar
          igFollowers="44 M"
          ytFollowers="33,9 M"
          spotyFollowers="15,6 M"
          ytLink="https://www.youtube.com/channel/UC9TO_oo4c_LrOiKNaY6aysA"
          igLink="https://www.instagram.com/daddyyankee/?hl=es"
          spotyLink="https://open.spotify.com/artist/4VMYDCV2IEDYJArk749S6m"
        />
        <div className="daddy-gallery">
          <GalleryArtists images={imagesDaddy} />
        </div>
      </div>

      <ArtistsBio name="Daddy Yankee" biography={biographyDaddy} />
    </div>
  );
};

export default DaddyYankee;
