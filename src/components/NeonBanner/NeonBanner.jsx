import React from "react";
import "./NeonBanner.scss";

const NeonBanner = ({title}) => {
  return (
    <div className="neon-banner">
      <div class="neon-banner__eventos">{title} </div>
    </div>
  );
};

export default NeonBanner;
