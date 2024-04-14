import GridMovies from "../GridMovies/GridMovies";
import GridMoviesItem from "../GridMoviesItem/GridMoviesItem";

const MovieList = ({ movies }) => {
  return (
    <GridMovies>
      {Array.isArray(movies) &&
        movies.map((movie) => {
          return <GridMoviesItem key={movie.id} movie={movie} />;
        })}
    </GridMovies>
  );
};

export default MovieList;
