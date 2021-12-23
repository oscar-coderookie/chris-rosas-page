import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
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
        </Switch>
        <a href="https://api.whatsapp.com/send?phone=+34722355841" target="_blank" rel="noopener noreferrer">
          <img className="whatsapp" src={whatsappLogo} alt="whatsapp" />
        </a>
      </div>
    </Router>
  );
}

export default App;
