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
  images as delaGeezy,
  text1,
  text2,
  text3,
} from "./mocks/delaghetto.js";

import {
  Header,
  MenuMobile,
  SpinnerLoader,
  EventsCarousel,
  WhatsappBtn,
  Footer,
  ArtistComponent,
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
            <Route exact path="/delageezy">
              <ArtistComponent
                name="De La Ghetto"
                ytLink="https://www.youtube.com/channel/UCRp097cJIVS-cQ_GuZWQkJg"
                ytFollowers="2,68 M"
                igFollowers="7,7 M"
                igLink="https://www.instagram.com/delaghetto/?hl=es"
                spotyFollowers="9,9 M"
                spotyLink="https://open.spotify.com/artist/3EiLUeyEcA6fbRPSHkG5kb"
                urlHero={
                  breakpoint
                    ? require("./assets/img/delaghetto.png")
                    : require("./assets/img/delaghetto-mobile.png")
                }
                images={delaGeezy}
                txt1={text1}
                txt2={text2}
                txt3={text3}
              />
            </Route>
          </Switch>
        </Suspense>

        <WhatsappBtn />
        <Footer />

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
