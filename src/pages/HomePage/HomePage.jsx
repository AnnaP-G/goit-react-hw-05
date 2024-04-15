import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../service/movieApi";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import css from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    const fetchMovies = async () => {
      try {
        const data = await getTrendingMovies();
        setMovies(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1 className={css.title}>Trending movies</h1>
      {loader && <Loader />}
      {error && <p className={css.error}>{error}</p>}
      {movies && <MovieList movies={movies} />}
    </div>
  );
};

export default HomePage;
