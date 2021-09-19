import GalleryContainer from "./GalleryContainer";
import Select from "./Select";
import { useEffect, useContext } from "react";
import LoadingAndErrorContext from "../contexts/LoadingAndErrorContext";
import InitialDataContext from "../contexts/InitialDataContext";
import { getAllArt } from "../APIcalls/InitialDataCall";
const Main = () => {
  const { setIsLoading, setIsError } = useContext(LoadingAndErrorContext);
  const { setInitialData } = useContext(InitialDataContext);

  useEffect(() => {
    setIsLoading(true);
    const initialValues = localStorage.getItem("initialData");
    if (initialValues) {
      setInitialData(JSON.parse(initialValues));
      setIsLoading(false);
    } else {
      const query = "french";
      getAllArt(query)
        .then((data) => {
          setInitialData(data);
          setIsLoading(false);
          localStorage.setItem("initialData", JSON.stringify(data));
          console.log(data);
        })
        .catch((error) => {
          setIsError(true);
          setIsLoading(false);
          console.log(error);
        });
    }
  }, []);
  return (
    <main className="gallery-main">
      <Select />
      <GalleryContainer />
    </main>
  );
};

export default Main;
