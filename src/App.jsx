import "./App.scss";
import React, { useState, useEffect, Suspense } from "react";
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
import { Header, MenuMobile, SpinnerLoader } from "./components";
import CookieConsent, {
  Cookies,
  getCookieConsentValue,
} from "react-cookie-consent";
import whatsappLogo from "./assets/img/whatsapp-logo.svg";
import Events2019 from "./pages/EventsPages/Events2019";
import Events2020 from "./pages/EventsPages/Events2020";
import Events2021 from "./pages/EventsPages/Events2021";

function App() {
  const [breakpoint, setBreakpoint] = useState(true);
  const handleWindowResize = () => {
    if (window.innerWidth > 520) {
      setBreakpoint(true);
    } else {
      setBreakpoint(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    if (window.innerWidth > 520) {
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
        <Suspense fallback={<SpinnerLoader/>}>
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
            <Route exact path="/events/2019">
              <Events2019 />
            </Route>
            <Route exact path="/events/2020">
              <Events2020 />
            </Route>
            <Route exact path="/events/2021">
              <Events2021 />
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
        </Suspense>

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
