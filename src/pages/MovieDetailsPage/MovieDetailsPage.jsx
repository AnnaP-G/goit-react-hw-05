import { Suspense, useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieDetails } from "../../service/movieApi";
import Loader from "../../components/Loader/Loader";
import MovieDetails from "../../components/MovieDetails/MovieDetails";

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
      {error && <p>{error}</p>}
      <Link to={backLink.current}>Go back</Link>
      {movies && <MovieDetails movies={movies} />}
      <div>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
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
