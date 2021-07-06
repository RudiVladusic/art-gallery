import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Form = ({ handleSubmit, searchTerm, setSearchTerm }) => {
  return (
    <form onSubmit={handleSubmit}>
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
