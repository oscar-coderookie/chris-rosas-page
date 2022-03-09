import React from "react";
import "./HomePage.scss";
import logo from "./../../assets/img/logo-blanco.png";
import { SectionFollowers } from "../../components";

const SectionTrendingVideo = () => {
  return (
    <div className="trending-video">
    <div className="trending-video__container">
    <iframe className="trending-video__iframe" src="https://www.youtube.com/embed/YCaQA3MNKAE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
