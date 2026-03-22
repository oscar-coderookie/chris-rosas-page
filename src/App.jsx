import React, { useState, useEffect, Suspense } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import HomePage from "./pages/HomePage/HomePage";
import ContactPage from "./pages/ContactPage/ContactPage";
import ArtistsPage from "./pages/Artists/ArtistsPage";
import NengoFlow from "./pages/NengoFlow/NengoFlow";
import NattiNatasha from "./pages/NattiNatasha/NattiNatasha";
import Bio from "./pages/Bio/Bio";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import EventsPage from "./pages/EventsPage/EventsPage";
import VipPage from "./pages/VipPage/VipPage";
import {
  images as delaGeezy,
  biography as bioDela,
} from "./mocks/delaghetto.js";
import {
  Header,
  MenuMobile,
  SpinnerLoader,
  EventsCarousel,
  WhatsappBtn,
  Footer,
  ArtistComponent,
  CookieConsentComponent,
  VipComponent,
  ComingSoon,
} from "./components";
//**imports of slides images: */
import natti from "./assets/img/events/natti-big-poster.jpg";
import daddy from "./assets/img/events/daddy-event-big.jpg";
import nengo from "./assets/img/events/nengo-big-poster.jpg";
import nattiMobile from "./assets/img/events/natti-little-poster.jpg";
import daddyMobile from "./assets/img/events/daddy-yankee-poster-little.jpg";
import nengoMobile from "./assets/img/events/nengo-little-poster.jpg";
import Aviation from "./assets/img/vip/aviacion.png";
import PropertiesImg from "./assets/img/vip/propiedades.png";
import ScrollToTop from "./config/scroll";
import SuperCarsPage from "./pages/SuperCars/SuperCarsPage";
import ArtistProfile from "./components/ArtistProfile/ArtistProfile.jsx";
import ArtistEditor from "./pages/Editor/ArtistEditor.jsx";
import ArtistsAdmin from "./pages/Editor/ArtistsAdmin.jsx";

function ErrorHandler({ error }) {
  return (
    <div role="alert">
      <p>An error occurred:</p>
      <pre>{error.message}</pre>
    </div>
  );
}

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
    <ErrorBoundary FallbackComponent={ErrorHandler}>
      <Router>
        <ScrollToTop />
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
                <ComingSoon />
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
                <ComingSoon />
              </Route>
              <Route exact path="/events/2022">
                <ComingSoon />
              </Route>
              <Route exact path="/artists">
                <ArtistsPage />
              </Route>
              <Route exact path="/artists/:artistId">
                <ArtistProfile />
              </Route>
              <Route path="/editor/:artistId">
                <ArtistEditor />
              </Route>
              <Route path="/editor">
                <ArtistsAdmin />
              </Route>

              <Route exact path="/vip">
                <VipPage />
              </Route>
              <Route exact path="/vip/nfts">
                <ComingSoon />
              </Route>
              <Route exact path="/vip/aviation">
                <ComingSoon urlIMG={Aviation} title="Aviación" />
              </Route>
              <Route exact path="/vip/properties">
                <ComingSoon urlIMG={PropertiesImg} title="Propiedades" />
              </Route>
              <Route exact path="/vip/experiences">
                <ComingSoon />
              </Route>
              <Route exact path="/vip/supercars">
                <SuperCarsPage />
              </Route>
              <Route exact path="/vip/criptoworld">
                <ComingSoon />
              </Route>


            </Switch>
          </Suspense>
          <CookieConsentComponent />
          <WhatsappBtn />
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
