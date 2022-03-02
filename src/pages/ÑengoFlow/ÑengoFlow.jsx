import React from "react";
import { ArtistsBio, GalleryArtists, SocialBar } from "../../components";
import "./ÑengoFlow.scss";
import {  images, bioNengo } from "../../mocks/ñengo";

const ÑengoFlow = () => {

  return (
    <div className="ñengo-block">
      <div className="ñengo-flow__hero"></div>
      <div className="ñengo-flow__bio">
        <SocialBar
          igFollowers="7 M"
          ytFollowers="22,8 K"
          spotyFollowers="1,8 M"
          ytLink="https://www.youtube.com/channel/UC-GHvO97LsZDQv30KPROFMQ"
          igLink="https://www.instagram.com/nengoflowofficial/?hl=es"
          spotyLink="https://open.spotify.com/artist/12vb80Km0Ew53ABfJOepVz"
        />
        
          <GalleryArtists images={images} />

      </div>
      <ArtistsBio
        name="Ñengo Flow"
       biography={bioNengo}
      />
    </div>
  );
};

export default ÑengoFlow;
