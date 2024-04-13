import { useEffect, useState } from "react";
import { getTrendingMovies } from "../service/movieApi";
import MovieList from "../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getTrendingMovies();
        setMovies(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Trending movies</h1>
      {error && <p>{error}</p>}
      {movies && <MovieList movies={movies} />}
    </div>
  );
};

export default HomePage;
