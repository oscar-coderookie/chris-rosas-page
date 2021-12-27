import React from "react";
import "./ServicesPage.scss";

const ServicesPage = () => {
  return (
    <div className="services-page">
      <div className="services-page__block">
        <h1 className="services-page__title">Servicios</h1>

        <ul className="services-page__list">
          <li className="services-page__element">
          Booking
          </li>
          <li className="services-page__element">
          Management
          </li>
          <li className="services-page__element">
          Production
          </li>
          <li className="services-page__element">
          Mixing and Mastering
          </li>
          <li className="services-page__element">
          Vocal Production
          </li>
          <li className="services-page__element">
          Songwriting and Composition
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ServicesPage;
