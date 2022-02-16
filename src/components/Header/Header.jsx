import React from "react";
import "./Header.scss";
import { NavLink, withRouter } from "react-router-dom";
import logo from "../../assets/img/logo-blanco.png";
import { useTranslation } from "react-i18next";
import { TraductionFlags } from "..";
//**icons: */
import bioIcon from "./../../assets/img/icons/bio-icon.png";
import homeIcon from "./../../assets/img/icons/home-icon.png";
import servicesIcon from "./../../assets/img/icons/services-icon.png";
import artistsIcon from "./../../assets/img/icons/artists-icon.png";
import eventsIcon from "./../../assets/img/icons/events-icon.png";
import contactIcon from "./../../assets/img/icons/contact-icon.png";

const Header = () => {
  const [t, i18n] = useTranslation("global");

  const ubication = window.location.pathname;

  return (
    <div className={ubication === "/" ? "header__clean" : "header"}>
      {ubication === "/" ? null : (
        <div className="header__logo">
          <img src={logo} alt="logo-chris" />
        </div>
      )}
      <nav className="header__nav">
        {ubication === "/" ? null : (
          <NavLink exact to="/" className="header__links">
            <img src={homeIcon} className="header__icons" alt="home-icon" />
            {t("header.home")}
          </NavLink>
        )}
        {ubication === "/bio" ? null : (
          <NavLink to="/bio" className="header__links">
          <img src={bioIcon} className="header__icons" alt="home-icon" />
            {t("header.bio")}
          </NavLink>
        )}
        {ubication === "/services" ? null : (
          <NavLink to="/services" className="header__links">
          <img src={servicesIcon} className="header__icons" alt="home-icon" />
            {t("header.services")}
          </NavLink>
        )}
        {ubication === "/artists" ||
        ubication === "/natti" ||
        ubication === "/daddy-yankee" ||
        ubication === "/nengo" ? null : (
          <NavLink to="/artists" className="header__links">
          <img src={artistsIcon} className="header__icons" alt="home-icon" />
            {t("header.artists")}
          </NavLink>
        )}
        {ubication === "/events" ? null : (
          <NavLink to="/events" className="header__links">
          <img src={eventsIcon} className="header__icons" alt="home-icon" />
            {t("header.events")}
          </NavLink>
        )}

        {ubication === "/contact" ? null : (
          <NavLink to="/contact" className="header__links">
          <img src={contactIcon} className="header__icons" alt="home-icon" />
            {t("header.contact")}
          </NavLink>
        )}
      </nav>
      {ubication === "/" ? null : <TraductionFlags />}
    </div>
  );
};

export default withRouter(Header);
