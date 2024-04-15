import { Link, useLocation } from "react-router-dom";
import GridMovies from "../GridMovies/GridMovies";
import GridMoviesItem from "../GridMoviesItem/GridMoviesItem";

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <GridMovies>
      {Array.isArray(movies) &&
        movies.map((movie) => {
          return (
            <GridMoviesItem key={movie.id} movie={movie}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </GridMoviesItem>
          );
        })}
    </GridMovies>
  );
};

export default MovieList;
