import React from "react";
import { SocialBar } from "../../components";
import "./DaddyYankee.scss";

const DaddyYankee = () => {
  return (
    <div className="daddy">
      <div className="daddy-yankee"></div>
      <SocialBar
        igFollowers="44 M"
        ytFollowers="33,9 M"
        spotyFollowers="15,6 M"
        ytLink="https://www.youtube.com/channel/UC9TO_oo4c_LrOiKNaY6aysA"
        igLink="https://www.instagram.com/daddyyankee/?hl=es"
        spotyLink="https://open.spotify.com/artist/4VMYDCV2IEDYJArk749S6m"

      />
    </div>
  );
};

export default DaddyYankee;
