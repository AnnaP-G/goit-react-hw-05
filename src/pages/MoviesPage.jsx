import { useEffect, useState } from "react";
import MoviesSearchForm from "../components/MoviesSearchForm/MoviesSearchForm";
import { getMoviesByQuery } from "../service/movieApi";
import Loader from "../components/Loader/Loader";

const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  const onSubmit = (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    if (!searchQuery) return;
    setLoader(true);
    const searchMoviesByQuery = async () => {
      try {
        const data = await getMoviesByQuery(query);
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
      {loader && <Loader />}
      {error && <p>{error}</p>}
    </div>
  );
};

export default MoviesPage;
