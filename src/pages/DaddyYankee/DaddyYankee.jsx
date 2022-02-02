import React from "react";
import { SocialBar } from "../../components";
import "./DaddyYankee.scss";

const DaddyYankee = () => {
  return (
    <div className="daddy">
      <div className="daddy-yankee"></div>
      <SocialBar igFollowers="44 M" ytFollowers="33,9 M" spotyFollowers="15,6 M" />
    </div>
  );
};

export default DaddyYankee;
