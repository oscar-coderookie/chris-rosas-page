import React, { useState, useEffect, Suspense } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { db } from "./config/firebase";
import { getDocs, collection, orderBy, query } from "firebase/firestore/lite";
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
} from "./components";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
//**imports of slides images: */
import natti from "./assets/img/events/natti-big-poster.jpg";
import daddy from "./assets/img/events/daddy-event-big.jpg";
import nengo from "./assets/img/events/nengo-big-poster.jpg";
import nattiMobile from "./assets/img/events/natti-little-poster.jpg";
import daddyMobile from "./assets/img/events/daddy-yankee-poster-little.jpg";
import nengoMobile from "./assets/img/events/nengo-little-poster.jpg";
import { biographyZyL, imagesZyL } from "./mocks/zyl";
import { imagesSasha, biographySasha } from "./mocks/sasha";
import { bioRkm, imagesRkm } from "./mocks/rakim-keny";

function App() {
  const [breakpoint, setBreakpoint] = useState(true);
  const [artists, setArtists] = useState([]);


  useEffect(() => {
    const artistsCollectionRef = query(
      collection(db, "artistas"),
      orderBy("nombre", "desc")
    );
    const getArtists = async () => {
      const data = await getDocs(artistsCollectionRef);
      setArtists(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };
    getArtists();
   
  }, []);

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
              <ArtistsPage artists={artists} />
            </Route>
            <Route exact path="/artists/daddy-yankee">
              <DaddyYankee />
            </Route>
            <Route exact path="/artists/nengo-flow">
              <ÑengoFlow />
            </Route>
            <Route exact path="/artists/natti-natasha">
              <NattiNatasha />
            </Route>
            <Route exact path="/artists/de-la-ghetto">
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
                biography={bioDela}
              />
            </Route>
            <Route exact path="/artists/zion-lennox">
              <ArtistComponent name="Zion & Lennox"
              ytLink="https://www.youtube.com/channel/UCyInsLK0iu7xYvKmOKIZe8w"
              ytFollowers="3,1 M"
              igFollowers="3,4 M"
              igLink="https://www.instagram.com/zionylennox/?hl=es"
              spotyLink="https://open.spotify.com/artist/21451j1KhjAiaYKflxBjr1"
              spotyFollowers="18,5 M"
              urlHero={
                breakpoint
                  ? require("./assets/img/zyl-desktop.jpg")
                  : require("./assets/img/zyl-mobile.jpg")   
              }
              images={imagesZyL}
              biography={biographyZyL}/>
            </Route>
            <Route exact path="/artists/sasha-sobhani">
              <ArtistComponent 
              name="Sasha"
              igFollowers="2,6 M"
              igLink="https://www.instagram.com/sashazob/?hl=es"
              ytFollowers="13,1 K"
              ytLink="https://www.youtube.com/channel/UCuAEbcCYXvkHtiXTDNxXjkg"
              spotyLink="https://open.spotify.com/artist/6bHULWQ9CCRWuRshc0gfzD"
              spotyFollowers="3,4 K"
              images={imagesSasha}
              biography={biographySasha}
              urlHero={
                breakpoint
                  ? require("./assets/img/sasha-desktop.jpg")
                  : require("./assets/img/sasha-mobile.jpg")   
              }
               />
            </Route>
            <Route exact path="/artists/rkm-keny">
              <ArtistComponent 
              name="Rakim & Ken-Y"
              igFollowers="752 K"
              igLink="https://www.instagram.com/rkmykeny/?hl=es"
              ytFollowers="709 K"
              ytLink="https://www.youtube.com/channel/UCcA4ZpNHrs4fEJG9xCc3B8g"
              spotyFollowers="3 M"
              spotyLink="https://open.spotify.com/artist/3jFjgKOGfVLWfXX8q5wrsg"
              images={bioRkm}
              biography={imagesRkm}
              urlHero={
                breakpoint
                  ? require("./assets/img/sasha-desktop.jpg")
                  : require("./assets/img/sasha-mobile.jpg")   
              }
               />
            </Route>
            <Route exact path="/vip">
              <VipPage />
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
