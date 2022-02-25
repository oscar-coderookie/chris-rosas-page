import React, { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
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
  const [open, setOpen] = useState(false);

  const ubication = window.location.pathname;

  return (
    <div className="menu-mobile">
      <div className="menu-mobile__header">
        {ubication === "/" ? null : (
          <img className="menu-mobile__logo" src={logo} alt="logo" />
        )}
        <Hamburger
          toggled={open}
          toggle={setOpen}
          onClick={() => setOpen(!open)}
          color="#ffffff"
        />
      </div>
      {open === false ? null : (
        <nav className="menu-mobile__nav">
          <div className="menu-mobile__buttons">
            <NavLink
              exact
              to="/"
              className="menu-mobile__links"
              onClick={() => setOpen(!open)}
            >
              <img
                src={homeIcon}
                alt="home-icon"
                className="menu-mobile__icons"
              />

              {t("header.home")}
            </NavLink>

            <NavLink
              exact
              to="/bio"
              className="menu-mobile__links"
              onClick={() => setOpen(!open)}
            >
              <img
                src={bioIcon}
                alt="bio-icon"
                className="menu-mobile__icons"
              />
              {t("header.bio")}
            </NavLink>

            <NavLink
              exact
              to="/services"
              className="menu-mobile__links"
              onClick={() => setOpen(!open)}
            >
              <img
                src={servicesIcon}
                alt="services-icon"
                className="menu-mobile__icons"
              />
              {t("header.services")}
            </NavLink>

            <NavLink
              exact
              to="/artists"
              className="menu-mobile__links"
              onClick={() => setOpen(!open)}
            >
              <img
                src={artistsIcon}
                alt="artists-icon"
                className="menu-mobile__icons"
              />
              {t("header.artists")}
            </NavLink>

            <NavLink
              exact
              to="/events"
              className="menu-mobile__links"
              onClick={() => setOpen(!open)}
            >
              <img
                src={eventsIcon}
                alt="events-icon"
                className="menu-mobile__icons"
              />

              {t("header.events")}
            </NavLink>

            <NavLink
              exact
              to="/contact"
              className="menu-mobile__links"
              onClick={() => setOpen(!open)}
            >
              <img
                src={contactIcon}
                alt="contact-icon"
                className="menu-mobile__icons"
              />
              {t("header.contact")}
            </NavLink>

            <NavLink
              exact
              to="/vip"
              className="menu-mobile__links"
              onClick={() => setOpen(!open)}
            >
              <img
                src={vipIcon}
                alt="vip-icon"
                className="menu-mobile__icon-vip"
              />
            </NavLink>
          </div>
          <TraductionFlags/>
        </nav>
      )}
    </div>
  );
};

export default withRouter(MenuMobile);
