import { useState } from "react";
import css from "./MoviesSearchForm.module.css";

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
    <form onSubmit={handleSubmit} className={css.form}>
      <input
        className={css.input}
        type="text"
        name="searchForm"
        placeholder="What are we looking for?"
        onChange={handleInputChange}
      />
      <button className={css.btn} type="submit">
        Search
      </button>
    </form>
  );
};

export default MoviesSearchForm;
