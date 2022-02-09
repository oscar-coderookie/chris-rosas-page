import React from "react";
import { NavLink } from "react-router-dom";
import { NeonBanner } from "../../components";
import "./EventsPage.scss";

const yearsCalendar = [
  { year: "2019", link: "/events/2019" },
  { year: "2020", link: "/events/2020" },
  { year: "2021" , link: "/events/2021"},
  { year: "2022" , link: "/events/2022"},
];

const IconCalendar = () => {
  return <span className="events-page__icon far fa-calendar-alt"></span>;
};

const EventsPage = () => {
  return (
    <div className="events-page">
      <div className="events-page__banner">
        <NeonBanner title="Eventos" />
      </div>
      <div className="events-page__menu">
        {yearsCalendar.map((year) => {
          return (
            <NavLink to={year.link} className="events-page__menu-item">
              <IconCalendar />
              {year.year}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default EventsPage;
