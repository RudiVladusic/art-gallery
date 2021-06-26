import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import Hero from "./components/presentational/Hero";
import Footer from "./components/presentational/Footer";
import ArtPieceDetails from "./components/ArtPieceDetails";
import "./styles/css/style.css";
const App = () => {
  return (
    <Router>
      <Switch>
        <>
          <Hero />
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/art/:id">
            <ArtPieceDetails />
          </Route>
          <Footer />
        </>
      </Switch>
    </Router>
  );
};

export default App;
