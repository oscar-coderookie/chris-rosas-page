import React from "react";
import "./MenuMobile.scss";
import logo from "../../assets/img/logo-blanco.png";
import { NavLink, withRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";
import TraductionFlags from "./../TraductionFlags/TraductionFlags";

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
            <span className="menu-mobile__icons fas fa-home"></span>
            {t("header.home")}
          </NavLink>
        )}
        {ubication === "/bio" ? null : (
          <NavLink exact to="/bio" className="menu-mobile__links">
            <span className="menu-mobile__icons fas fa-address-card"></span>
            {t("header.bio")}
          </NavLink>
        )}
        {ubication === "/services" ? null : (
          <NavLink exact to="/services" className="menu-mobile__links">
            <span className="menu-mobile__icons fas fa-compact-disc"></span>
            {t("header.services")}
          </NavLink>
        )}
        {ubication === "/artists" ||
        ubication === "/natti" ||
        ubication === "/daddy-yankee" ||
        ubication === "/nengo" ? null : (
          <NavLink exact to="/artists" className="menu-mobile__links">
            <span className="menu-mobile__icons fas fa-music"></span>
            {t("header.artists")}
          </NavLink>
        )}
        {ubication === "/events" ? null : (
          <NavLink exact to="/events" className="menu-mobile__links">
            <span className="menu-mobile__icons far fa-calendar-alt"></span>
            {t("header.events")}
          </NavLink>
        )}
        {ubication === "/contact" ? null : (
          <NavLink exact to="/contact" className="menu-mobile__links">
            <span className="menu-mobile__icons fas fa-address-book"></span>
            {t("header.contact")}
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default withRouter(MenuMobile);
