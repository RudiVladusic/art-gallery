import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import Footer from "./components/presentational/Footer";
import ArtPieceDetails from "./components/ArtPieceDetails";
import Nav from "./components/Nav";
import "./styles/css/style.css";
import MyFavorites from "./components/MyFavorites";
import About from "./components/presentational/About";
import { useState } from "react";
import { getAllArt } from "../src/APIcalls/InitialDataCall";
import InitialDataContext from "./contexts/InitialDataContext";
import LoadingAndErrorContext from "./contexts/LoadingAndErrorContext";
import SelectContext from "./contexts/SelectContext";

const App = () => {
  const [searchTerm, setSearchTerm] = useState(String);
  const [initialData, setInitialData] = useState(Array);
  const [isLoading, setIsLoading] = useState(Boolean);
  const [isError, setIsError] = useState(Boolean);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsError(false);
    setIsLoading(true);
    getAllArt(searchTerm)
      .then((data) => {
        setIsLoading(false);
        localStorage.setItem("initialData", JSON.stringify(data));
        setInitialData(data);
        console.log(data);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
        console.log(error);
      });
  };

  return (
    <Router>
      <Switch>
        <>
          <Nav
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleSubmit={handleSubmit}
          />
          <LoadingAndErrorContext.Provider
            value={{ isLoading, setIsLoading, isError, setIsError }}
          >
            <InitialDataContext.Provider
              value={{ initialData, setInitialData }}
            >
              <SelectContext.Provider
                value={{ setInitialData, searchTerm, getAllArt, setSearchTerm }}
              >
                <Route exact path="/">
                  <Main />
                </Route>
              </SelectContext.Provider>
            </InitialDataContext.Provider>

            <Route exact path="/art/:id">
              <ArtPieceDetails />
            </Route>
            <Route exact path="/myfavorites">
              <MyFavorites />
            </Route>
          </LoadingAndErrorContext.Provider>
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
