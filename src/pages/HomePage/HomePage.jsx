import React from "react";
import "./HomePage.scss";
import logo from "./../../assets/img/logo-blanco.png";
import { SectionFollowers } from "../../components";

const SectionTrendingVideo = () => {
  return (
    <div className="trending-video">
    <div className="trending-video__container">
      <h3 className="trending-video__legend">Donde el mundo ve Ruido..</h3>
   <iframe className="trending-video__iframe" width="560" height="315" src="https://www.youtube.com/embed/BaBTlEW1u34?si=dFI1Q9_rb0KxRLwF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
   <h2>NOSOTROS EJECUTAMOS LA VICTORIA</h2>
    </div>
    
    </div>
    
  )
}

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="homepage-hero">
        <img className="homepage__logo" src={logo} alt="logo" />
      </div>
      <SectionFollowers/>
      <SectionTrendingVideo/>
    </div>
    
  );
};

export default HomePage;
