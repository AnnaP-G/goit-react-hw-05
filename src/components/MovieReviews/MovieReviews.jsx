import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { getMovieReviews } from "../../service/movieApi";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    setLoader(true);
    const searchMovieReviews = async () => {
      try {
        const data = await getMovieReviews(movieId);
        setReviews(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };

    searchMovieReviews();
  }, [movieId]);

  return (
    <>
      {loader && <Loader />}
      {error && <p>{error}</p>}
      <ul>
        {reviews &&
          reviews.map(({ author, content, id }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
      </ul>
    </>
  );
};

export default MovieReviews;
