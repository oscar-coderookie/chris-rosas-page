import React from "react";
import "./MenuMobile.scss";
import logo from "../../assets/img/logo-blanco.png";
import { NavLink, withRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";
import TraductionFlags from "./../TraductionFlags/TraductionFlags";
//**icons: */
import bioIcon from "./../../assets/img/icons/bio-icon.png";
import homeIcon from "./../../assets/img/icons/home-icon.png";
import servicesIcon from "./../../assets/img/icons/services-icon.png";
import artistsIcon from "./../../assets/img/icons/artists-icon.png";
import eventsIcon from "./../../assets/img/icons/events-icon.png";
import contactIcon from "./../../assets/img/icons/contact-icon.png";
import vipIcon from "./../../assets/img/icons/vip-icon.png";

const MenuMobile = () => {
  const [t, i18n] = useTranslation("global");

  const ubication = window.location.pathname;

  return (
    <div className="menu-mobile">
      {ubication === "/" ? null : (
        <div className="menu-mobile__header">
          <img className="menu-mobile__logo" src={logo} alt="logo" />
          <TraductionFlags className="menu-mobile__flags" />
        </div>
      )}
      <nav className="menu-mobile__nav">
        {ubication === "/" ? null : (
          <NavLink exact to="/" className="menu-mobile__links">
            <img src={homeIcon} alt="" className="menu-mobile__icons" />
            
            {t("header.home")}
          </NavLink>
        )}
        {ubication === "/bio" ? null : (
          <NavLink exact to="/bio" className="menu-mobile__links">
            <img src={bioIcon} alt="" className="menu-mobile__icons" />
            {t("header.bio")}
          </NavLink>
        )}
        {ubication === "/services" ? null : (
          <NavLink exact to="/services" className="menu-mobile__links">
          <img src={servicesIcon} alt="" className="menu-mobile__icons" />
            {t("header.services")}
          </NavLink>
        )}
        {ubication === "/artists" ||
        ubication === "/natti" ||
        ubication === "/daddy-yankee" ||
        ubication === "/nengo" ? null : (
          <NavLink exact to="/artists" className="menu-mobile__links">
          <img src={artistsIcon} alt="" className="menu-mobile__icons" />
            {t("header.artists")}
          </NavLink>
        )}
        {ubication === "/events" ? null : (
          <NavLink exact to="/events" className="menu-mobile__links">
          <img src={eventsIcon} alt="" className="menu-mobile__icons" />
            
            {t("header.events")}
          </NavLink>
        )}
        {ubication === "/contact" ? null : (
          <NavLink exact to="/contact" className="menu-mobile__links">
          <img src={contactIcon} alt="" className="menu-mobile__icons" />
            {t("header.contact")}
          </NavLink>
        )}
        {ubication === "/vip" ? null : (
          <NavLink exact to="/vip" className="menu-mobile__icon-vip">
          <img src={vipIcon} alt="" className="menu-mobile__icon-vip" />
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default withRouter(MenuMobile);
