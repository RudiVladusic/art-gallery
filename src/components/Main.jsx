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

  useEffect(() => {
    const userHasDataInLocalStorage = localStorage.getItem("initialData");
    const initialSearch = localStorage.getItem("searchTerm");
    if (userHasDataInLocalStorage) {
      setInitialData(JSON.parse(userHasDataInLocalStorage));

      setCurrentSearch(JSON.parse(initialSearch));
    } else {
      const query = "french";
      setIsLoading(true);
      getAllArt(query)
        .then((data) => {
          setInitialData(data);
          localStorage.setItem("initialData", JSON.stringify(data));
          setCurrentSearch(`Currently displaying ${query} art`);
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
      <h2 className="current-search">{currentSearch}</h2>
      <Select />
      {isLoading ? <Loading /> : <GalleryContainer />}
    </main>
  );
};

export default Main;
