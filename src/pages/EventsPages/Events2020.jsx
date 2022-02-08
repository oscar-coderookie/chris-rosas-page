import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./Events2020.scss";
import natti from "../../assets/img/events/natti-big-poster.jpg";
import daddy from "../../assets/img/events/daddy-event-big.jpg";
import nengo from "../../assets/img/events/nengo-big-poster.jpg";


const Events2020 = () => {
  return (
    <div className="events-2020">
      <Carousel showThumbs={false} showStatus={false} >
        <div className="events-2020__img">
        <img src={natti} alt="natti" />
        </div>
        <div className="events-2020__img">
        <img src={daddy} alt="natti" />
        </div>
        <div className="events-2020__img">
        <img src={nengo} alt="natti" />
        </div>
      </Carousel>
    </div>
  );
};

export default Events2020;
