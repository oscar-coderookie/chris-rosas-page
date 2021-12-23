import React from "react";
import "./HomePage.scss";
import video from "../../assets/video/intro-chris-rosas.mp4";

const HomePage = () => {
  return (
    <div className="homepage">
      <video className="homepage__video" loop autoPlay muted>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default HomePage;
