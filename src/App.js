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
  const [currentSearch, setCurrentSearch] = useState(String);

  const handleSubmit = (e) => {
    setIsError(false);
    if (e.target.tagName === "FORM") {
      e.preventDefault();
    }

    setIsLoading(true);

    const checkEventTarget =
      e.target.tagName === "FORM"
        ? searchTerm
        : e.target.tagName === "SELECT"
        ? e.target.value
        : e.target.textContent;

    getAllArt(checkEventTarget)
      .then((data) => {
        localStorage.setItem("initialData", JSON.stringify(data));
        localStorage.setItem("searchTerm", JSON.stringify(checkEventTarget));
        setInitialData(data);
        setIsLoading(false);
        setCurrentSearch(checkEventTarget);
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
          <SelectContext.Provider
            value={{
              setInitialData,
              searchTerm,
              handleSubmit,
              setSearchTerm,
            }}
          >
            <Nav />
            <LoadingAndErrorContext.Provider
              value={{ isLoading, setIsLoading, isError, setIsError }}
            >
              <InitialDataContext.Provider
                value={{
                  initialData,
                  setInitialData,
                  currentSearch,
                  setCurrentSearch,
                }}
              >
                <Route exact path="/">
                  <Main />
                </Route>
              </InitialDataContext.Provider>

              <Route exact path="/art/:id">
                <ArtPieceDetails />
              </Route>

              <Route exact path="/myfavorites">
                <MyFavorites />
              </Route>
            </LoadingAndErrorContext.Provider>
          </SelectContext.Provider>
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
