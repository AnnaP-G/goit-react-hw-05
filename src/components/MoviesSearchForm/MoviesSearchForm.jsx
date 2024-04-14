const MoviesSearchForm = ({ onSubmit }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const searchValue = evt.currentTarget.elements.searchForm.value.trim();
    if (!searchValue) return;
    onSubmit(searchValue);
    evt.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="searchForm"
        placeholder="What are we looking for?"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default MoviesSearchForm;
