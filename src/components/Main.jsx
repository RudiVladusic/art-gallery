import { useState, useEffect } from "react";
import { getAllArt } from "../APIcalls/InitialDataCall";
import Loading from "./Loading";
import GalleryContainer from "./GalleryContainer";
const Main = () => {
  const [initialData, setInitialData] = useState(Array);
  const [isLoading, setIsLoading] = useState(Boolean);
  const [isError, setIsError] = useState(Boolean);
  const [selectValue, setSelectValue] = useState(String);
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

  const fetchSelected = async (query) => {
    const call = await fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=${query}`
    );
    const result = await call.json();
    const ids = result.objectIDs
      .slice(0, 50)
      .map(
        async (id) =>
          await (
            await fetch(
              `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`,
              { method: "GET" }
            )
          ).json()
      );
    return Promise.all(ids);
  };

  return (
    <main className="gallery-main">
      <select
        name="department"
        id="department"
        onChange={(e) => {
          fetchSelected(e.target.value)
            .then(setIsLoading(true))
            .then((data) => {
              setInitialData(data);
              setIsLoading(false);
            });
        }}
        defaultValue={selectValue}
      >
        <option
          value={selectValue}
          onChange={(e) => {
            setSelectValue(e.target.value);
          }}
          disabled
        >
          Select department
        </option>
        <option value="French">French</option>
        <option value="Medieval">Medieval</option>
        <option value="Modern">Modern</option>
        <option value="Egyptian">Egyptian</option>
        <option value="Asian">Asian</option>
        <option value="Arms and Armor">Arms and Armor</option>
        <option value="American Decorative Arts">
          American Decorative Arts
        </option>
        <option value="Ancient Near Eastern Art">
          Ancient Near Eastern Art
        </option>
        <option value="Drawings and Prints">Drawings and Prints</option>
      </select>
      {isLoading ? <Loading /> : <GalleryContainer initialData={initialData} />}
    </main>
  );
};

export default Main;
