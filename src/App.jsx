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
import { bioIvy, imagesIvy } from "./mocks/ivy-queen";
import { bioPeter, imagesPeter } from "./mocks/peter-nieto";
import { bioChencho, imagesChencho } from "./mocks/chencho";
import { bioGuaynaa, imagesGuaynaa } from "./mocks/guaynaa";
import { bioJonz, imagesJonz } from "./mocks/jonz";
import { bioOvi, imagesOVI } from "./mocks/ovi";
import { biographyDaddy, imagesDaddy } from "./mocks/daddy";

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
              <ArtistComponent
                name="Daddy Yankee"
                igFollowers="44 M"
                ytFollowers="33,9 M"
                spotyFollowers="15,6 M"
                ytLink="https://www.youtube.com/channel/UC9TO_oo4c_LrOiKNaY6aysA"
                igLink="https://www.instagram.com/daddyyankee/?hl=es"
                spotyLink="https://open.spotify.com/artist/4VMYDCV2IEDYJArk749S6m"
                urlHero={
                  breakpoint
                    ? require("./assets/img/daddy-desktop.jpg")
                    : require("./assets/img/daddy-mobile.jpg")
                }
                images={imagesDaddy}
                biography={biographyDaddy}
              />
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
                    : require("./assets/img/dela-mobile.jpg")
                }
                images={delaGeezy}
                biography={bioDela}
              />
            </Route>
            <Route exact path="/artists/zion-lennox">
              <ArtistComponent
                name="Zion & Lennox"
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
                images={null}
                biography={biographyZyL}
              />
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
                images={null}
                biography={bioRkm}
                urlHero={
                  breakpoint
                    ? require("./assets/img/rkm-desktop.jpg")
                    : require("./assets/img/rkm-mobile.jpg")
                }
              />
            </Route>
            <Route exact path="/artists/peter-nieto">
              <ArtistComponent
                name="Peter Nieto"
                igFollowers="29,7 K"
                igLink="https://www.instagram.com/peternietomusic/?hl=es"
                ytFollowers="6,1 K"
                ytLink="https://www.youtube.com/channel/UCVdC5F2JnFhiUpKIR_i9h_g"
                spotyFollowers="10,3 K"
                spotyLink="https://open.spotify.com/artist/3awr6bI2IAMghTMbzv4Pi6"
                images={null}
                biography={bioPeter}
                urlHero={
                  breakpoint
                    ? require("./assets/img/peter-desktop.jpg")
                    : require("./assets/img/peter-mobile.jpg")
                }
              />
            </Route>
            <Route exact path="/artists/ivy-queen">
              <ArtistComponent
                name="Ivy Queen"
                igFollowers="3,1 M"
                igLink="https://www.instagram.com/ivyqueendiva/?hl=es-la"
                ytFollowers="853 K"
                ytLink="https://www.youtube.com/channel/UCabtU2G5Iqx3PsiSLtPHxZQ"
                spotyFollowers="4,3 M"
                spotyLink="https://open.spotify.com/artist/5bWUlnPx9OYKsLiUJrhCA1"
                images={null}
                biography={bioIvy}
                urlHero={
                  breakpoint
                    ? require("./assets/img/ivy-desktop.jpg")
                    : require("./assets/img/ivy-mobile.jpg")
                }
              />
            </Route>
            <Route exact path="/artists/jon-z">
              <ArtistComponent
                name="Jon-Z"
                igFollowers="5,3 M"
                igLink="https://www.instagram.com/jonzmen/?hl=es-la"
                ytFollowers="6,08 M"
                ytLink="https://www.youtube.com/channel/UCoXewWGlEiCK5G2iGxWXdKA"
                spotyFollowers="4,7 M"
                spotyLink="https://open.spotify.com/artist/5bWUlnPx9OYKsLiUJrhCA1"
                images={null}
                biography={bioJonz}
                urlHero={
                  breakpoint
                    ? require("./assets/img/jonz-desktop.jpg")
                    : require("./assets/img/jonz-mobile.jpg")
                }
              />
            </Route>
            <Route exact path="/artists/guayna">
              <ArtistComponent
                name="Guaynaa"
                igFollowers="5,9 M"
                igLink="https://www.instagram.com/guaynaa/?hl=es-la"
                ytFollowers="3,32 M"
                ytLink="https://www.youtube.com/channel/UCMCiKO21-niWqCIW4LA170w"
                spotyFollowers="9,7 M"
                spotyLink="https://open.spotify.com/artist/0BqURncJM5B1BBu7UM51eq"
                images={null}
                biography={bioGuaynaa}
                urlHero={
                  breakpoint
                    ? require("./assets/img/guaynaa-desktop.jpg")
                    : require("./assets/img/guaynaa-mobile.jpg")
                }
              />
            </Route>
            <Route exact path="/artists/chencho-corleone">
              <ArtistComponent
                name="Chencho Corleone"
                igFollowers="2,1 M"
                igLink="https://www.instagram.com/chenchocorleone/?hl=es-la"
                ytFollowers="612 K"
                ytLink="https://www.youtube.com/channel/UCTStLchCIe1xO-y1Oi1lruQ"
                spotyFollowers="22,8 M"
                spotyLink="https://open.spotify.com/artist/37230BxxYs9ksS7OkZw3IU"
                images={imagesChencho}
                biography={bioChencho}
                urlHero={
                  breakpoint
                    ? require("./assets/img/chencho-desktop.jpg")
                    : require("./assets/img/chencho-mobile.jpg")
                }
              />
            </Route>
            <Route exact path="/artists/ovi">
              <ArtistComponent
                name="OVI"
                igFollowers="2,2 M"
                igLink="https://www.instagram.com/ovi_oficial/?hl=es-la"
                ytFollowers="6,66 M"
                ytLink="https://www.youtube.com/c/RanchoHumildeoficial"
                spotyFollowers="4,6 M"
                spotyLink="https://open.spotify.com/artist/4o0NtnL2m0lzZmEdRas1qv"
                images={null}
                biography={bioOvi}
                urlHero={
                  breakpoint
                    ? require("./assets/img/ovi-desktop.jpg")
                    : require("./assets/img/ovi-mobile.jpg")
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
      </div>
    </Router>
  );
}

export default App;
