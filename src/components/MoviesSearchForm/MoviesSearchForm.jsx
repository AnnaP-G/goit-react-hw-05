import { useState } from "react";

const MoviesSearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (evt) => {
    setQuery(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="searchForm"
        placeholder="What are we looking for?"
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default MoviesSearchForm;
