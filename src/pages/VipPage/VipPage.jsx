import React from "react";
import "./VipPage.scss";
import { NavLink } from "react-router-dom";

const linksHeaderVip = [
  { link: "Criptoworld", route: "/vip/criptoworld" },
  { link: "SuperCarros", route: "/vip/supercars" },
  { link: "Jets/Aviación", route: "/vip/aviation" },
  { link: "Properties", route: "/vip/properties" },
  { link: "NFTs", route: "/vip/nfts" },
  { link: "Experiences", route: "/vip/experiences" },
];

const HeaderVip = () => {
  return (
    <nav className="header-vip">
      <ul className="header-vip__list">
        {linksHeaderVip.map((link, index) => {
          return (
            <li key={index}>
              <NavLink className="header-vip__links" to={link.route}>
                {link.link}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

const VipPage = () => {
  return (
    <div className="vip-page">
      <HeaderVip />
    </div>
  );
};

export default VipPage;
