import React from "react";
import "./Header.scss";
import { NavLink, withRouter } from "react-router-dom";
import logo from "../../assets/img/logo-blanco.png";
import { useTranslation } from "react-i18next";


const Header = () => {
  const ubication = window.location.pathname;

  const { t, i18n } = useTranslation();

  return (
    <div className="header">
      <nav class="header__nav">
        {ubication === "/" ? null : (
          <NavLink exact to="/" className="header__links">
            <span className="header__icons fas fa-home"></span>{t("Home.1")}
          </NavLink>
        )}
        {ubication === "/bio" ? null : (
          <NavLink to="/bio" className="header__links">
            <span className="header__icons fas fa-address-card"></span>{t("Bio.1")}
          </NavLink>
        )}
        {ubication === "/services" ? null : (
          <NavLink to="/services" className="header__links">
            <span className="header__icons fas fa-compact-disc"></span>{t("Services.1")}
          </NavLink>
        )}
        {ubication === "/events" ? null : (
          <NavLink to="/events" className="header__links">
            <span className="header__icons far fa-calendar-alt"></span>{t("Events.1")}
          </NavLink>
        )}

        {ubication === "/contact" ? null : (
          <NavLink to="/contact" className="header__links">
            <span className="header__icons fas fa-address-book"></span>{t("Contact.1")}
          </NavLink>
        )}
      </nav>
      {ubication === "/" ? null : (
        <div className="header__logo">
          <img src={logo} alt="logo-chris" />
        </div>
      )}
        
    </div>
  );
};

export default withRouter(Header);
