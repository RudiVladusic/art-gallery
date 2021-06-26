import { useState, useEffect } from "react";
import { getAllArt } from "../APIcalls/InitialDataCall";
import Loading from "./Loading";
import GalleryContainer from "./GalleryContainer";
import Form from "./Form";
import Error from "./Error";
const Main = () => {
  const [initialData, setInitialData] = useState(Array);
  const [isLoading, setIsLoading] = useState(Boolean);
  const [isError, setIsError] = useState(false);
  const [selectValue, setSelectValue] = useState(String);
  const [searchTerm, setSearchTerm] = useState(String);
  useEffect(() => {
    setIsLoading(true);
    let query = "french";
    getAllArt(query)
      .then((data) => {
        setInitialData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
        console.log(error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    getAllArt(searchTerm)
      .then((data) => {
        console.log(data, searchTerm);
        setInitialData(data);
        setIsLoading(false);
        setIsError(false);
      })
      .catch((error) => {
        setIsError(true);
        setIsLoading(false);
        console.log(error);
      });
  };

  return (
    <main className="gallery-main">
      <select
        name="department"
        id="department"
        onChange={(e) => {
          getAllArt(e.target.value)
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
      <Form
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSubmit={handleSubmit}
      />
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <Error />
      ) : (
        <GalleryContainer initialData={initialData} />
      )}
    </main>
  );
};

export default Main;
