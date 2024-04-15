import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import { getMovieCredits } from "../../service/movieApi";

const defaultImg =
  "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

const MovieCast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState(null);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    setLoader(true);
    const searchMovieCastActors = async () => {
      try {
        const data = await getMovieCredits(movieId);
        setActors(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };

    searchMovieCastActors();
  }, [movieId]);

  return (
    <div>
      {loader && <Loader />}
      {error && <p>{error}</p>}
      {actors && (
        <ul>
          {actors.map(({ cast_id, name, profile_path, character }) => (
            <li key={cast_id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : defaultImg
                }
                alt={name}
              />
              <h3>{name}</h3>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieCast;
