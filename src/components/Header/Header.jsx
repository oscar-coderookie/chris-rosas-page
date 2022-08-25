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
import vipIcon from "./../../assets/img/icons/vip-icon.png";

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
        <NavLink exact to="/" className="header__links">
          <img src={homeIcon} className="header__icons" alt="home-icon" />
          {t("header.home")}
        </NavLink>

        {/*
        <NavLink to="/bio" className="header__links">
          <img src={bioIcon} className="header__icons" alt="home-icon" />
          {t("header.bio")}
        </NavLink>
      */}

        <NavLink to="/services" className="header__links">
          <img src={servicesIcon} className="header__icons" alt="home-icon" />
          {t("header.services")}
        </NavLink>

        <NavLink to="/artists" className="header__links">
          <img src={artistsIcon} className="header__icons" alt="home-icon" />
          {t("header.artists")}
        </NavLink>

        <NavLink to="/events" className="header__links">
          <img src={eventsIcon} className="header__icons" alt="home-icon" />
          {t("header.events")}
        </NavLink>

        <NavLink to="/contact" className="header__links">
          <img src={contactIcon} className="header__icons" alt="home-icon" />
          {t("header.contact")}
        </NavLink>

        <NavLink to="/vip" className="header__icon-vip">
          <img src={vipIcon} className="header__icon-vip" alt="home-icon" />
        </NavLink>
      </nav>
    </div>
  );
};

export default withRouter(Header);
