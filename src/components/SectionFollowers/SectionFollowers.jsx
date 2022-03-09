import React, { useEffect, useState } from "react";
import "./SectionFollowers.scss";
import AnimatedNumbers from "react-animated-numbers";
import NeonBanner from "../NeonBanner/NeonBanner";
import AnimatedStars from "../AnimatedStars/AnimatedStars";

const SectionFollowers = () => {
  const INITIAL_STATE = { Instagram: 0, YouTube: 0, Spotify: 0 };
  const [counter, setCounter] = useState(INITIAL_STATE);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    const scrollCounter = () => {
      setCounter({ Instagram: 123, YouTube: 130, Spotify: 126 });
    };
    if (isLoaded === false) {
      setTimeout(scrollCounter, 3000);
      setIsLoaded(true);
      console.log("hello");
    }
  }, []);

  return (
    <div className="section-followers">
      <AnimatedStars />
      <div className="section-followers__bar">
        <NeonBanner title="Audiencia en plataformas digitales:" />
        <div className="section-followers__block">
          <div className="section-followers__social">
            <span className="section-followers__icon fab fa-instagram"></span>
            <AnimatedNumbers
              animateToNumber={counter.Instagram}
              fontStyle={{ fontSize: 40 }}
            />
          
          </div>
          <div className="section-followers__social">
            <span className="section-followers__icon fab fa-youtube"></span>
            <AnimatedNumbers
              animateToNumber={counter.YouTube}
              fontStyle={{ fontSize: 40 }}
            />
    
          </div>
          <div className="section-followers__social">
            <span className="section-followers__icon fab fa-spotify"></span>
            <AnimatedNumbers
              animateToNumber={counter.Spotify}
              fontStyle={{ fontSize: 40 }}
            />
  
          </div>
          
        </div>
        <h3 className="section-followers__title">Millones de Usuarios</h3>
        <p className="section-followers__legend">
          "Manejamos los artistas del género urbano con más trayectoria y experiencia, las redes sociales lo avalan"
        </p>
      </div>
    </div>
  );
};

export default SectionFollowers;
