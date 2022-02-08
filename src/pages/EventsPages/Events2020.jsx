import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "./Events2020.scss";
import natti from "../../assets/img/events/natti-big-poster.jpg";
import daddy from "../../assets/img/events/daddy-event-big.jpg";
import nengo from "../../assets/img/events/nengo-big-poster.jpg";

import nattiMobile from "../../assets/img/events/natti-little-poster.jpg";
import daddyMobile from "../../assets/img/events/daddy-yankee-poster-little.jpg";
import nengoMobile from "../../assets/img/events/nengo-little-poster.jpg";

const Events2020 = () => {
  const [breakpoint, setBreakpoint] = useState(true);
  const handleWindowResize = () => {
    if (window.innerWidth > 520) {
      setBreakpoint(true);
    } else {
      setBreakpoint(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    if (window.innerWidth > 520) {
      setBreakpoint(true);
    } else {
      setBreakpoint(false);
    }
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="events-2020">
      <Carousel showThumbs={false} showStatus={false} swipeable={true}>
        <div className="events-2020__img">
          {!breakpoint ? (
            <img src={nattiMobile} alt="natti-mobile" />
          ) : (
            <img src={natti} alt="natti" />
          )}
        </div>
        <div className="events-2020__img">
          {!breakpoint ? (
            <img src={daddyMobile} alt="natti-mobile" />
          ) : (
            <img src={daddy} alt="daddy" />
          )}
        </div>
        <div className="events-2020__img">
          {!breakpoint ? (
            <img src={nengoMobile} alt="nengo-mobile" />
          ) : (
            <img src={nengo} alt="nengo" />
          )}
        </div>
      </Carousel>
    </div>
  );
};

export default Events2020;
