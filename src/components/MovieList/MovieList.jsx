import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  console.log(movies);
  return (
    <div>
      <ul>
        {Array.isArray(movies) &&
          movies.map((movie) => {
            return (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default MovieList;
