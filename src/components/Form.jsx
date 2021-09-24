import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router";

const Form = ({ handleSubmit, searchTerm, setSearchTerm }) => {
  let history = useHistory();
  return (
    <form
      tabIndex="0"
      onSubmit={(e) => {
        handleSubmit(e);
        history.push("/");
      }}
    >
      <label htmlFor="search term"></label>
      <input
        tabIndex="0"
        type="text"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        required
        value={searchTerm}
        placeholder="Search here..."
      />
      <button tabIndex="0" type="submit" className="form-submit">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  );
};

export default Form;
