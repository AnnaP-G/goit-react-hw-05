const GridMoviesItem = ({ children }) => {
  return <li>{children}</li>;
  // <li key={movie.id}>
  //   <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
  // </li>
};

export default GridMoviesItem;
