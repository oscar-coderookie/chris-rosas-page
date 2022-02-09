import React from "react";
import "./Bio.scss";
import profilePhoto from "../../assets/img/bio-perfil.jpg";
import dyLogo1 from "../../assets/img/Logos-DY-1.png";
import dyLogo2 from "../../assets/img/Logos-DY-2.png";
import dyLogo3 from "../../assets/img/Logos-DY-3.png";
import dyLogo4 from "../../assets/img/Logos-DY-4.png";
import { NeonBanner } from "../../components";

const Bio = () => {
  return (
    <div className="bio">
      <NeonBanner title="Bio" />
      <div className="bio-block">
        <div className="bio-image">
          <img src={profilePhoto} alt="chris-rosas" />
        </div>
        <div className="bio-text">
        <NeonBanner title="Chris Rosas" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quae
            aliquam, inventore vitae enim accusamus tempore odit earum
            voluptate, cumque deserunt! Accusamus dignissimos sapiente vero
            aliquid ipsam iusto numquam atque? Provident qui in, molestiae
            aspernatur sed ad non, magnam atque voluptatem esse unde quas
            voluptas accusantium quaerat molestias deleniti. Quisquam officiis
            laudantium nulla aliquam hic illum deleniti pariatur odio eveniet.
          </p>
        </div>
      </div>
      <p>Patrocinan:</p>
      <div className="bio-logos">
        <img src={dyLogo1} alt="dyLogo1" />
        <img src={dyLogo2} alt="dyLogo2" />
        <img src={dyLogo3} alt="dyLogo3" />
        <img src={dyLogo4} alt="dyLogo4" />
      </div>
    </div>
  );
};

export default Bio;
