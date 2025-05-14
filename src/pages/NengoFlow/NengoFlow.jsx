import React from "react";
import { ArtistsBio, GalleryArtists, SocialBar } from "../../components";
import "./NengoFlow.scss";
import { bioNengo, images } from "../../mocks/ñengo";


const ÑengoFlow = () => {
  const pagina1 = bioNengo[0];
  const pagina2 = bioNengo[1];
  const pagina3 = bioNengo[2];

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
        <div className="ñengo-gallery">
          <GalleryArtists images={images} />
        </div>
      </div>
      <ArtistsBio
        name="Ñengo Flow"
        text1={pagina1}
        text2={pagina2}
        text3={pagina3}
      />
    </div>
  );
};

export default ÑengoFlow;
