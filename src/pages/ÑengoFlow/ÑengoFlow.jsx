import React from "react";
import { SocialBar } from "../../components";
import "./ÑengoFlow.scss";

const ÑengoFlow = () => {
  return (
    <div className="ñengo-block">
      <div className="ñengo-flow"></div>
      <SocialBar
        igFollowers="7 M"
        ytFollowers="22,8 K"
        spotyFollowers="1,8 M"
        ytLink="https://www.youtube.com/channel/UC-GHvO97LsZDQv30KPROFMQ"
        igLink="https://www.instagram.com/nengoflowofficial/?hl=es"
        spotyLink="https://open.spotify.com/artist/12vb80Km0Ew53ABfJOepVz"
      />
    </div>
  );
};

export default ÑengoFlow;
