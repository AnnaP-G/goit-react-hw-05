import css from "./GridMovies.module.css";

const GridMovies = ({ children }) => {
  return <ul className={css.list}>{children}</ul>;
};

export default GridMovies;
