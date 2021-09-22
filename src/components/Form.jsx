import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router";
import { useState } from "react";

const Form = ({ handleSubmit, searchTerm, setSearchTerm }) => {
  let history = useHistory();
  const [isFormActive, setIsFormActive] = useState(Boolean);
  return (
    <form
      tabIndex="0"
      className={isFormActive ? "active" : null}
      onFocus={() => {
        setIsFormActive(!isFormActive);
      }}
      onSubmit={(e) => {
        handleSubmit(e);
        history.push("/");
      }}
    >
      <label htmlFor="search term"></label>
      <input
        type="text"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        required
        value={searchTerm}
        placeholder="Search here..."
      />
      <button type="submit" className="form-submit">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  );
};

export default Form;
