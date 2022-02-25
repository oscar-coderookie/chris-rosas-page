import React, { useState, useEffect, Suspense } from "react";
import "./App.scss";
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
import VipPage from "./pages/VipPage/VipPage";

import {
  Header,
  MenuMobile,
  SpinnerLoader,
  EventsCarousel,
  WhatsappBtn,
  Footer,
} from "./components";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
//**imports of slides images: */
import natti from "./assets/img/events/natti-big-poster.jpg";
import daddy from "./assets/img/events/daddy-event-big.jpg";
import nengo from "./assets/img/events/nengo-big-poster.jpg";
import nattiMobile from "./assets/img/events/natti-little-poster.jpg";
import daddyMobile from "./assets/img/events/daddy-yankee-poster-little.jpg";
import nengoMobile from "./assets/img/events/nengo-little-poster.jpg";

function App() {
  const [breakpoint, setBreakpoint] = useState(true);
  const handleWindowResize = () => {
    if (window.innerWidth > 425) {
      setBreakpoint(true);
    } else {
      setBreakpoint(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    if (window.innerWidth > 425) {
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
        <Suspense fallback={<SpinnerLoader />}>
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
              <EventsCarousel />
            </Route>
            <Route exact path="/events/2020">
              <EventsCarousel
                natti={natti}
                nattiMobile={nattiMobile}
                daddy={daddy}
                daddyMobile={daddyMobile}
                nengo={nengo}
                nengoMobile={nengoMobile}
              />
            </Route>
            <Route exact path="/events/2021">
              <EventsCarousel />
            </Route>
            <Route exact path="/events/2022">
              <EventsCarousel />
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
            <Route exact path="/vip">
              <VipPage />
            </Route>
          </Switch>
        </Suspense>

        <WhatsappBtn />
        <Footer/>

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
