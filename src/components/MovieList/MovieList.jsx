import { Link, useLocation } from "react-router-dom";
import GridMovies from "../GridMovies/GridMovies";
import GridMoviesItem from "../GridMoviesItem/GridMoviesItem";
import css from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();

  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <GridMovies>
      {Array.isArray(movies) &&
        movies.map((movie) => {
          const imageUrl = `${imageBaseUrl}${movie.poster_path}`;

          return (
            <GridMoviesItem key={movie.id} movie={movie}>
              <Link
                className={css.linkMivie}
                to={`/movies/${movie.id}`}
                state={{ from: location }}
              >
                <img className={css.imgList} src={imageUrl} alt={movie.title} />
                <p className={css.titleMovie}>{movie.title}</p>
              </Link>
            </GridMoviesItem>
          );
        })}
    </GridMovies>
  );
};

export default MovieList;
