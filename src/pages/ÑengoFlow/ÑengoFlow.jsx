import React from "react";
import { ArtistsBio, GalleryArtists, SocialBar } from "../../components";
import "./ÑengoFlow.scss";
import { pagina1, pagina2, pagina3 } from "../../mocks/ñengo";

const images = [
  {
    original:
      "https://firebasestorage.googleapis.com/v0/b/chris-rosas-web.appspot.com/o/artistas%2F%C3%B1engo-flow%2F43985528_333130667480759_3535181263646385198_n-564x705.jpg?alt=media&token=5ee7f1aa-547c-4b88-be4e-b66778a259f8",
  },
  {
    original:
      "https://firebasestorage.googleapis.com/v0/b/chris-rosas-web.appspot.com/o/artistas%2F%C3%B1engo-flow%2F53751192_439016246871935_7852648155770104097_n-583x705.jpg?alt=media&token=229e32b3-5f57-411b-b278-f0ecb2f8243a",
  },
  {
    original:
      "https://firebasestorage.googleapis.com/v0/b/chris-rosas-web.appspot.com/o/artistas%2F%C3%B1engo-flow%2F64396183_114909079773512_6037688353090223439_n-564x705.jpg?alt=media&token=6d07bd14-b0fc-4b23-bc1b-943d13c694d4",
  },
  {
    original:
      "https://firebasestorage.googleapis.com/v0/b/chris-rosas-web.appspot.com/o/artistas%2F%C3%B1engo-flow%2Fgaleria-%C3%B1engo%20(0).jpeg?alt=media&token=8390b05d-7454-40ef-a4f2-4e354eb5b007",
  },
  {
    original:
      "https://firebasestorage.googleapis.com/v0/b/chris-rosas-web.appspot.com/o/artistas%2F%C3%B1engo-flow%2Fgaleria-%C3%B1engo%20(3).jpeg?alt=media&token=05590e99-a16e-49a6-8b23-1df5cdb1f966",
  },
  {
    original:
      "https://firebasestorage.googleapis.com/v0/b/chris-rosas-web.appspot.com/o/artistas%2F%C3%B1engo-flow%2Fgaleria-%C3%B1engo%20(7).jpeg?alt=media&token=19c8e2f9-5f45-4444-9b1d-7f66083324c0",
  },
  {
    original:
      "https://firebasestorage.googleapis.com/v0/b/chris-rosas-web.appspot.com/o/artistas%2F%C3%B1engo-flow%2Fgaleria-%C3%B1engo%20(8).jpeg?alt=media&token=54fe7551-152e-4997-ac8d-32604803422e",
  },
  {
    original:
      "https://firebasestorage.googleapis.com/v0/b/chris-rosas-web.appspot.com/o/artistas%2F%C3%B1engo-flow%2Fgaleria-%C3%B1engo%20(9).jpeg?alt=media&token=c959c76e-dc81-44fd-bbb4-f16ed7fb5dec",
  },
];

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
