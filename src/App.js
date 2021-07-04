import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import Footer from "./components/presentational/Footer";
import ArtPieceDetails from "./components/ArtPieceDetails";
import Nav from "./components/presentational/Nav";
import "./styles/css/style.css";
import MyFavorites from "./components/MyFavorites";
import About from "./components/presentational/About";
const App = () => {
  return (
    <Router>
      <Switch>
        <>
          <Nav />

          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/art/:id">
            <ArtPieceDetails />
          </Route>
          <Route exact path="/myfavorites">
            <MyFavorites />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Footer />
        </>
      </Switch>
    </Router>
  );
};

export default App;
