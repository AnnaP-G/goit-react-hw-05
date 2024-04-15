import css from "./GridMoviesItem.module.css";

const GridMoviesItem = ({ children }) => {
  return <li className={css.link}>{children}</li>;
};

export default GridMoviesItem;
