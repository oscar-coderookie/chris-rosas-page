import React from "react";
import { SocialBar, GalleryArtists, ArtistsBio } from "../../components";
import "./NattiNatasha.scss";
import { bioNatti, images } from "../../mocks/natti";

const NattiNatasha = () => {
  return (
    <div className="natti-block">
      <div className="natti-natasha"></div>
      <SocialBar
        igFollowers="34,8 M"
        ytFollowers="4,8 M"
        spotyFollowers="7,3 M"
        ytLink="https://www.youtube.com/channel/UCu59H8LNti6mwvcGRMge5PA"
        igLink="https://www.instagram.com/nattinatasha/?hl=es"
        spotyLink="https://open.spotify.com/artist/1GDbiv3spRmZ1XdM1jQbT7"
      />
      <GalleryArtists images={images} />
      <ArtistsBio
        name="Natti Natasha"
        biography={bioNatti}
      />
    </div>
  );
};

export default NattiNatasha;
