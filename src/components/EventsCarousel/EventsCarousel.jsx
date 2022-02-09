import React, {useEffect, useState} from "react";
import "./EventsCarousel.scss";
import { Carousel } from "react-responsive-carousel";


const EventsCarousel = ({natti, nattiMobile, daddy, daddyMobile, nengo, nengoMobile}) => {
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
    <div className="events">
      <Carousel showThumbs={false} showStatus={false} swipeable={true}>
        <div className="events__img">
          {!breakpoint ? (
            <img src={nattiMobile} alt="natti-mobile" />
          ) : (
            <img src={natti} alt="natti" />
          )}
        </div>
        <div className="events__img">
          {!breakpoint ? (
            <img src={daddyMobile} alt="natti-mobile" />
          ) : (
            <img src={daddy} alt="daddy" />
          )}
        </div>
        <div className="events__img">
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

export default EventsCarousel;
