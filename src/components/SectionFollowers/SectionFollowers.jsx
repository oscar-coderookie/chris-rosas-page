import React, { useEffect, useState } from "react";
import "./SectionFollowers.scss";
import AnimatedNumbers from "react-animated-numbers";
import NeonBanner from "../NeonBanner/NeonBanner";

const SectionFollowers = () => {
  const INITIAL_STATE = { Instagram: 0, YouTube: 0, Spotify: 0 };
  const [counter, setCounter] = useState(INITIAL_STATE);
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(false)
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
    <NeonBanner title="Audiencia total en redes sociales:" />
      <div className="section-followers__bar">
        <div className="section-followers__social">
          <span className="section-followers__icon fab fa-instagram"></span>
          <AnimatedNumbers
            animateToNumber={counter.Instagram}
            fontStyle={{ fontSize: 40 }}
          />
          Millones
        </div>
        <div className="section-followers__social">
          <span className="section-followers__icon fab fa-youtube"></span>
          <AnimatedNumbers
            animateToNumber={counter.YouTube}
            fontStyle={{ fontSize: 40 }}
          />
          Millones
        </div>
        <div className="section-followers__social">
          <span className="section-followers__icon fab fa-spotify"></span>
          <AnimatedNumbers
            animateToNumber={counter.Spotify}
            fontStyle={{ fontSize: 40 }}
          />
          Millones
        </div>
      </div>
      <p>"Nuestros artistas son los más pegados y escuchados del momento en las redes"</p>
    </div>
  );
};

export default SectionFollowers;
