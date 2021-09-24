import GalleryContainer from "./GalleryContainer";
import Select from "./Select";
import { useEffect, useContext } from "react";
import LoadingAndErrorContext from "../contexts/LoadingAndErrorContext";
import InitialDataContext from "../contexts/InitialDataContext";
import { getAllArt } from "../APIcalls/InitialDataCall";
import Loading from "./presentational/Loading";
const Main = () => {
  const { setIsLoading, setIsError, isLoading } = useContext(
    LoadingAndErrorContext
  );
  const { setInitialData, currentSearch, setCurrentSearch } =
    useContext(InitialDataContext);
  const userHasDataInLocalStorage = localStorage.getItem("initialData");
  const initialSearch = localStorage.getItem("searchTerm");
  const randomSearchTermsForFirstVisit = [
    "American Decorative Arts",
    "Egyptian Art",
    "European Paintings",
    "Greek and Roman Art",
    "Medieval Art",
    "Photographs",
    "Modern Art",
  ];
  useEffect(() => {
    if (userHasDataInLocalStorage) {
      setInitialData(JSON.parse(userHasDataInLocalStorage));
      setCurrentSearch(JSON.parse(initialSearch));
    } else {
      const query =
        randomSearchTermsForFirstVisit[
          Math.floor(Math.random() * randomSearchTermsForFirstVisit.length)
        ];
      setIsLoading(true);
      getAllArt(query)
        .then((data) => {
          setInitialData(data);
          localStorage.setItem("initialData", JSON.stringify(data));
          localStorage.setItem("searchTerm", JSON.stringify(query));
          setCurrentSearch(query);
          setIsLoading(false);
        })
        .catch((error) => {
          setIsError(true);
          setIsLoading(false);
          console.log(error);
        });
    }
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="gallery-main">
      <h2 className="current-search">
        Currently displaying: <span>{currentSearch}</span>
      </h2>
      <Select />

      {isLoading ? <Loading /> : <GalleryContainer />}
    </main>
  );
};

export default Main;
