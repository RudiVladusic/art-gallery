import React from "react";

const Select = ({
  selectValue,
  setSelectValue,
  setIsLoading,
  setInitialData,
  getAllArt,
  setIsError,
}) => {
  return (
    <select
      name="department"
      id="department"
      onChange={(e) => {
        getAllArt(e.target.value)
          .then(setIsLoading(true))
          .then((data) => {
            setInitialData(data);
            setIsLoading(false);

            setIsError(false);
            localStorage.setItem("initialData", JSON.stringify(data));
          })
          .catch((error) => {
            console.log(error);
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
      <option value="American Decorative Arts">American Decorative Arts</option>
      <option value="Ancient Near Eastern Art">Ancient Near Eastern Art</option>
      <option value="Arms and Armor">Arms and Armor</option>
      <option value="Arts of Africa, Oceania, and the Americas">
        Arts of Africa, Oceania, and the Americas
      </option>
      <option value="Asian Art">Asian Art</option>
      <option value="The Cloisters">The Cloisters</option>
      <option value="The Costume Institute">The Costume Institute</option>
      <option value="Drawings and Prints">Drawings and Prints</option>
      <option value="Egyptian Art">Egyptian Art</option>
      <option value="European Paintings">European Paintings</option>
      <option value="European Sculpture and Decorative Arts">
        European Sculpture and Decorative Arts
      </option>
      <option value="Greek and Roman Art">Greek and Roman Art</option>
      <option value="Islamic Art">Islamic Art</option>
      <option value="The Robert Lehman Collection">
        The Robert Lehman Collection
      </option>
      <option value="The Libraries">The Libraries</option>
      <option value="Medieval Art">Medieval Art</option>
      <option value="Musical Instruments">Musical Instruments</option>
      <option value="Photographs">Photographs</option>
      <option value="French Art">French Art</option>
      <option value="Modern Art">Modern Art</option>
    </select>
  );
};

export default Select;
