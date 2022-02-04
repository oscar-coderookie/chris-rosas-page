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
import { Header} from "./components";
import CookieConsent from "react-cookie-consent";
import whatsappLogo from "./assets/img/whatsapp-logo.svg";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        
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
          <Route exact path="/ñengo">
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
        <CookieConsent
          debug={true}
          buttonText="Acepto"
          style={{ background: "#383838" }}
          buttonStyle={{ color: "black", fontSize: "12px" }}
          enableDeclineButton
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
