import React from "react";
import { NavLink } from "react-router-dom";
import "./EventsPage.scss";

const EventsPage = () => {
  return (
    <div className="events-page">
      <div className="events-page__menu">
        <NavLink to="/events/2019" className="events-page__menu-item">
          2019
        </NavLink>
        <NavLink className="events-page__menu-item" to="/events/2020">
          2020
        </NavLink>
        <NavLink className="events-page__menu-item" to="/events/2020">
          2021
        </NavLink>
      </div>
    </div>
  );
};

export default EventsPage;
