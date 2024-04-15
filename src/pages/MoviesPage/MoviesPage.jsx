import { useEffect, useState } from "react";
import MoviesSearchForm from "../../components/MoviesSearchForm/MoviesSearchForm";
import { getMoviesByQuery } from "../../service/movieApi";
import Loader from "../../components/Loader/Loader";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  //це функція, яка приймає значення інпуту
  const onSubmit = (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    if (!searchQuery) return;
    setLoader(true);
    const searchMoviesByQuery = async () => {
      try {
        const data = await getMoviesByQuery(searchQuery);
        setMovies(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };

    searchMoviesByQuery();
  }, [searchQuery]);

  return (
    <div>
      <MoviesSearchForm onSubmit={onSubmit} />
      <MovieList movies={movies} />
      {loader && <Loader />}
      {error && <p>{error}</p>}
    </div>
  );
};

export default MoviesPage;
