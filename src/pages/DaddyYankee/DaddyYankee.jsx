import React from "react";
import { SocialBar, GalleryArtists, ArtistsBio } from "../../components";
import "./DaddyYankee.scss";
import { images, text1, text2, text3, text4 } from "../../mocks/daddy";


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
      <GalleryArtists images={images}/>
      </div>
      </div>
      
      
      <ArtistsBio
      name="Daddy Yankee"
      text1={text1}
      text2={text2}
    text3={text3}

      />
    </div>
  );
};

export default DaddyYankee;
