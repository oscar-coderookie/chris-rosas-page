import React from "react";
import { NavLink } from "react-router-dom";
import { NeonBanner } from "../../components";
import "./EventsPage.scss";

const IconCalendar = () => {
  return (
    <div>
      <img
        className="events-page__icon"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAEKElEQVR4nO2bTahVVRTHf8teppmfmIIpYpqhSQMrocAcmDUrcNLApA+MBhkFRtYsa6L0BUWDFwgGTiyCdBAEQlhEg4qgTHxpkyh4SkiWaJr6a3DOxdvp3XPuu+/cc56884PHhb33Wvu/193n7H3X3g8aGhoaGhomLFGGE/U+YGem+OGI+Lkk/0uBfZniFyPi4Fh9D4zVQcoC4I5M2eySfLd8Zf0vKMPxpDKcXM00AahbQN1M+AAUvgTVqcAOYCMwJ1N9ICIeK7D/Cri1R31DEXF3gf89wIOZ4lPAR8DLEXEuz76bVWAQ2NyhbloX9jPofUWY0UWbaSP4nw28AMwHcr+g3ACo04FNOU1aHQ8BH7abAsPqJGBeXh8FzFMDGAY+4L/7lqGMhpF4RN0aEWd66l1dYT5n1cU59o8X2HfDozn+l6jnCuxX5I2x6BEo2ilOBQ6p7wKnM3ZrgI7iR8FudS3wNcnMajET2ApMKbDPHUNupboS+LELkeOZ2yLiSKfKCb8MNgGoW0DdNAGoW0DdFK0Ck4GFFWnpF79GxIW6RYxbimbAMuDTirT0iwci4ninyqKd4GTg5nL1VM7kvMoJ/xKsOwCni5v0lzoDsB2YC3xRo4baAjAMvBMRF4GXatIA1BeAXa1UVUR8CRyqSUctATgBvKcOqM+mZTtq0AHUE4DXIuIsSaptp3pTRHwGfF6DlsoD8DswqF5D8uxPAbalda9WrAUo72wwj2HgKEkSc39EnFE3cSVV/pS6KyIOqs8Dq9O65cD0CvR1Rl3ZQxJzr/qoukadNYLPAfVIxuaNDv0vVNerT6vf9qBFk7ReR8rOCV4EboiI8+2DAG5J/5YDa0kSpu1cAj5O+xoCjgHHIuKPNj8bSQ47RktuTjCXHmfA+ybPOOqbPX5rqufV+1M/C9SjPfrJnQH9CIDqPvVaNdTXe7D/W30o1bBI/alHHVpTAFQPqNelfraPwu6Muj61W6weH4MGrTEAqvsdXRBOq2vS9svUX8bYv9YcANVP1IHU36mCtnvSdkvV30roWwsCUMVG6F7gsslB6/+WxQyL0s8llHQHqIgqAnA4Ii4Dqyg+a7w9/fyhv5KuUEUAWoNZ1VZ2GdgLbAG+aSufq86PiBPAyQq01RKAg8CdEbE5InZHxF3ABuD7TLvDFWirJACtneQp4J6I2BAR36mrTFaGOemFx9XAE1x5T1T2GHTEclaBeRmfi9VB9WJa/5e6U52ZabelhL615mWwfS+/0GTgFzq0Pak+p05J268bY98tcgPQ75/DM9RXSKb1k+Tf5rgReAvYpr4NrOuzNqC5IVL4ErSg/mogdwxFM+B6ksOLKjJH/eAfYFaagxyR3BmQGg6WrapCBvMGD138w4RJcuMZkuuo3dzcHA/8CRwgOXy5VLeYhoaGhoaGccq/DewJER8bWoYAAAAASUVORK5CYII="
      />
    </div>
  );
};

const EventsPage = () => {
  return (
    <div className="events-page">
    <div className="events-page__banner">
        <NeonBanner title="Eventos"/>
      </div>
      <div className="events-page__menu">
        <NavLink to="/events/2019" className="events-page__menu-item">
          <IconCalendar />
          2019
        </NavLink>
        <NavLink className="events-page__menu-item" to="/events/2020">
          <IconCalendar />
          2020
        </NavLink>
        <NavLink className="events-page__menu-item" to="/events/2020">
          <IconCalendar />
          2021
        </NavLink>
      </div>
      
    </div>
  );
};

export default EventsPage;
