import React from "react";
import CookieConsent from "react-cookie-consent";

const CookieConsentComponent = () => {
  return (
    <CookieConsent
      location="bottom"
      cookieName="siteCookieConsent"
      buttonText="Acepto"
      declineButtonText="No acepto"
      enableDeclineButton
      expires={150}
      style={{ background: "#383838" }}
      buttonStyle={{ color: "black", fontSize: "12px" }}
      hideOnAccept={true}
    >
      Este sitio web usa cookies. Revisa la política de privacidad para mayor información.
    </CookieConsent>
  );
};

export default CookieConsentComponent;
