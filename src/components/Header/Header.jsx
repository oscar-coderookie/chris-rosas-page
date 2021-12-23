import React from "react";
import './Header.scss';
import { NavLink, withRouter } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">

      <nav class="header__nav">
        <NavLink exact to="/" className="header__links">
          <span className="header__icons fas fa-home"></span>Inicio
        </NavLink>
        <NavLink to="/bio"  className="header__links">
          <span className="header__icons fas fa-address-card"></span>Bio
        </NavLink>
        <NavLink to="/services" className="header__links">
          <span className="header__icons fas fa-compact-disc"></span>Servicios
        </NavLink>
        <NavLink to="/events" className="header__links">
          <span className="header__icons far fa-calendar-alt"></span>Eventos
        </NavLink>
        <NavLink  to="/contact" className="header__links">
          <span className="header__icons fas fa-address-book"></span>Contacto
        </NavLink>
      </nav>
    </div>
  );
};

export default withRouter(Header);
