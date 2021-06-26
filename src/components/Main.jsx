import { useState, useEffect } from "react";
import { getAllArt } from "../APIcalls/InitialDataCall";

import Loading from "./Loading";
import GalleryContainer from "./GalleryContainer";
const Main = () => {
  const [initialData, setInitialData] = useState(Array);
  const [isLoading, setIsLoading] = useState(Boolean);
  const [isError, setIsError] = useState(Boolean);
  useEffect(() => {
    setIsLoading(true);
    getAllArt()
      .then((data) => {
        setInitialData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
        console.log(error);
      });
  }, []);
  return (
    <main className="gallery-main">
      {isLoading ? <Loading /> : <GalleryContainer initialData={initialData} />}
    </main>
  );
};

export default Main;
