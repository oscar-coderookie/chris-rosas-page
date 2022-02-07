import "./App.scss";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ContactPage from "./pages/ContactPage/ContactPage";
import ArtistsPage from "./pages/Artists/ArtistsPage";
import DaddyYankee from "./pages/DaddyYankee/DaddyYankee";
import ÑengoFlow from "./pages/ÑengoFlow/ÑengoFlow";
import NattiNatasha from "./pages/NattiNatasha/NattiNatasha";
import Bio from "./pages/Bio/Bio";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import EventsPage from "./pages/EventsPage/EventsPage";
import { Header, MenuMobile } from "./components";
import CookieConsent, {
  Cookies,
  getCookieConsentValue,
} from "react-cookie-consent";
import whatsappLogo from "./assets/img/whatsapp-logo.svg";

function App() {
  const [breakpoint, setBreakpoint] = useState(true);
  const handleWindowResize = () => {
    if (window.innerWidth > 475) {
      setBreakpoint(true);
    } else {
      setBreakpoint(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    if (window.innerWidth > 475) {
      setBreakpoint(true);
    } else {
      setBreakpoint(false);
    }
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Router>
      <div className="app">
        {!breakpoint ? <MenuMobile /> : null}
        {breakpoint ? <Header /> : null}
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/contact">
            <ContactPage />
          </Route>
          <Route exact path="/bio">
            <Bio />
          </Route>
          <Route exact path="/services">
            <ServicesPage />
          </Route>
          <Route exact path="/events">
            <EventsPage />
          </Route>
          <Route exact path="/artists">
            <ArtistsPage />
          </Route>
          <Route exact path="/daddy-yankee">
            <DaddyYankee />
          </Route>
          <Route exact path="/nengo">
            <ÑengoFlow />
          </Route>
          <Route exact path="/natti">
            <NattiNatasha />
          </Route>
        </Switch>
        <a
          href="https://api.whatsapp.com/send?phone=+34722355841"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="whatsapp" src={whatsappLogo} alt="whatsapp" />
        </a>

        {getCookieConsentValue === true ? null : (
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
            onDecline={() => {
              alert("Vale!");
            }}
            onAccept={(acceptedByScrolling) => {
              if (acceptedByScrolling) {
                // triggered if user scrolls past threshold
                alert("Accept was triggered by user scrolling");
              } else {
                alert("Aviso de cookies aceptado");
              }
            }}
          >
            Este sitio web usa cookies. Revisa la política de privacidad para
            mayor información.
          </CookieConsent>
        )}
      </div>
    </Router>
  );
}

export default App;
