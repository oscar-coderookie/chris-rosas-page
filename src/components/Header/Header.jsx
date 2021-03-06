import React from "react";
import "./Header.scss";
import { NavLink, withRouter } from "react-router-dom";
import logo from "../../assets/img/logo-blanco.png";
import { useTranslation } from "react-i18next";
import { TraductionFlags } from "..";

const Header = () => {
  const [t, i18n] = useTranslation("global")

  const ubication = window.location.pathname;

  return (
    <div className="header">
    {ubication === "/" ? null : (
      <div className="header__logo">
        <img src={logo} alt="logo-chris" />
      </div>
    )}
      <nav className="header__nav">
        {ubication === "/" ? null : (
          <NavLink exact to="/" className="header__links">
            <span className="header__icons fas fa-home"></span>{t("header.home")}
          </NavLink>
        )}
        {ubication === "/bio" ? null : (
          <NavLink to="/bio" className="header__links">
            <span className="header__icons fas fa-address-card"></span>{t('header.bio')}
          </NavLink>
        )}
        {ubication === "/services" ? null : (
          <NavLink to="/services" className="header__links">
            <span className="header__icons fas fa-compact-disc"></span>{t("header.services")}
          </NavLink>
        )}
        {ubication === "/artists" ||
        ubication === "/natti" ||
        ubication === "/daddy-yankee" ||
        ubication === "/nengo" ? null : (
          <NavLink to="/artists" className="header__links">
            <span className="header__icons fas fa-music"></span>{t('header.artists')}
          </NavLink>
        )}
        {ubication === "/events" ? null : (
          <NavLink to="/events" className="header__links">
            <span className="header__icons far fa-calendar-alt"></span>{t('header.events')}
          </NavLink>
        )}

        {ubication === "/contact" ? null : (
          <NavLink to="/contact" className="header__links">
            <span className="header__icons fas fa-address-book"></span>{t('header.contact')}
          </NavLink>
        )}
      </nav>

   
      
      <TraductionFlags/>
   
      
    </div>
  );
};

export default withRouter(Header);
