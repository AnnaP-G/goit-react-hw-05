import { Link } from "react-router-dom";

const GridMoviesItem = ({ movie }) => {
  console.log(movie);
  return (
    <li key={movie.id}>
      <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
    </li>
  );
};

export default GridMoviesItem;
