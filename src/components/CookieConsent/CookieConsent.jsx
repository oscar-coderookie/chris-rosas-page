import React from "react";
import CookieConsent from "react-cookie-consent";

const CookieConsentComponent = () => {
  return (
    <React.Fragment>
      <CookieConsent
        debug={true}
        buttonText="Acepto"
        style={{ background: "#383838" }}
        buttonStyle={{ color: "black", fontSize: "12px" }}
        enableDeclineButton
        hideOnAccept={true}
        visible="byCookieValue"
        expires={150}
        declineButtonText="No acepto"
      >
        Este sitio web usa cookies. Revisa la política de privacidad para mayor
        información.
      </CookieConsent>
    </React.Fragment>
  );
};

export default CookieConsentComponent;
