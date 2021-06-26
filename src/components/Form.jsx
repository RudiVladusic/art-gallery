const Form = ({ handleSubmit, searchTerm, setSearchTerm }) => {
  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        value={searchTerm}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Form;
