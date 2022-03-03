import React from "react";

const LogoComponent = () => {
  return (
    <React.Fragment>
      {ubication === "/" ? null : (
        <div className="logo">
          <img src={logo} alt="logo__img" />
        </div>
      )}
    </React.Fragment>
  );
};

export default LogoComponent;
