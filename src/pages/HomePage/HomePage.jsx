import React from "react";
import "./HomePage.scss";
import logo from "./../../assets/img/logo-blanco.png";
import CounterComponent from "../../components/CounterComponent/CounterComponent";
import counter from "./../../mocks/counter.json";
import { SectionFollowers } from "../../components";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="homepage-hero">
        <img className="homepage__logo" src={logo} alt="logo" />
      </div>
      <SectionFollowers/>
    </div>
    
   
    
  );
};

export default HomePage;
