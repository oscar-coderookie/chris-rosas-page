import React from "react";
import "./HomePage.scss";
import video from "../../assets/video/intro-chris-rosas.mp4";
import logo from './../../assets/img/logo-blanco.png';

const VideoHome = ()=> {
  <video className="homepage__video" loop autoPlay muted>
        <source src={video} type="video/mp4" />
      </video>
}

const HomePage = () => {
  return (
    <div className="homepage">
      <img className="homepage__logo" src={logo} alt="logo" />
    </div>
  );
};

export default HomePage;
