import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Form = ({ handleSubmit, searchTerm, setSearchTerm }) => {
  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="search term"></label>
      <input
        type="text"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        value={searchTerm}
        placeholder="Type here..."
      />
      <button type="submit">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  );
};

export default Form;
