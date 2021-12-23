import React from "react";
import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <nav class="header__nav">
        <a href="" className="header__links">
          <span class="header__icons fas fa-home"></span>Inicio
        </a>
        <a href="" class="header__links">
          <span class="header__icons fas fa-address-card"></span>Bio
        </a>
        <a href="" class="header__links">
          <span class="header__icons fas fa-compact-disc"></span>Servicios
        </a>
        <a href="" class="header__links">
          <span class="header__icons far fa-calendar-alt"></span>Eventos
        </a>
        <a href="" class="header__links">
          <span class="header__icons fas fa-address-book"></span>Contacto
        </a>
      </nav>
    </div>
  );
};

export default Header;
