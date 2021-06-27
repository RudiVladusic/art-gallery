import React from "react";

const Select = ({
  selectValue,
  setSelectValue,
  setIsLoading,
  setInitialData,
  getAllArt,
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
      <option value="American Decorative Arts">American Decorative Arts</option>
      <option value="Ancient Near Eastern Art">Ancient Near Eastern Art</option>
      <option value="Drawings and Prints">Drawings and Prints</option>
    </select>
  );
};

export default Select;
