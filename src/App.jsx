import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ContactPage from "./pages/ContactPage/ContactPage";
import {Header} from "./components";
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
        </Switch>
        <a href="https://api.whatsapp.com/send?phone=+34722355841" target="_blank" rel="noopener noreferrer">
          <img className="whatsapp" src={whatsappLogo} alt="whatsapp" />
        </a>
        <CookieConsent 
        debug={true}
        buttonText="Acepto"
        style={{ background: "#383838" }}
        buttonStyle={{ color: "black",  fontSize: "12px" }}
        >Este sitio web usa cookies. Revisa la política de privacidad para mayor información.
        </CookieConsent>
      </div>


    </Router>
  );
}

export default App;
