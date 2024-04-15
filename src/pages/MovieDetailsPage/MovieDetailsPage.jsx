import { Suspense, useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieDetails } from "../../service/movieApi";
import Loader from "../../components/Loader/Loader";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  const location = useLocation();
  const backLink = useRef(location.state?.from ?? "/");

  useEffect(() => {
    if (!movieId) return;
    setLoader(true);
    const searchMovieDetailsById = async () => {
      try {
        const data = await getMovieDetails(movieId);
        setMovies(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };

    searchMovieDetailsById();
  }, [movieId]);

  return (
    <div>
      {loader && <Loader />}
      {error && <p className={css.error}>{error}</p>}
      <Link className={css.link} to={backLink.current}>
        Go back
      </Link>
      {movies && <MovieDetails movies={movies} />}
      <div className={css.additionalDetails}>
        <ul className={css.detailsList}>
          <li>
            <Link className={css.link} to="cast">
              Cast
            </Link>
          </li>
          <li>
            <Link className={css.link} to="reviews">
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
