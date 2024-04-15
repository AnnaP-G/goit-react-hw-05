import css from "./MovieDetails.module.css";

const MovieDetails = ({ movies }) => {
  const {
    genres = [],
    overview = "",
    poster_path = "",
    title = "",
    release_date = "",
    runtime = 0,
    vote_average = 0,
    production_countries = [],
  } = movies || {};

  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

  return (
    <div className={css.movieBox}>
      <div>
        <img
          className={css.imgPoster}
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : defaultImg
          }
          alt={title}
        />
      </div>
      <div className={css.boxDescription}>
        <h2 className={css.title}>{`${title} (${
          release_date.split("-")[0]
        })`}</h2>
        <h3 className={css.titleGenres}>Genres</h3>
        <p className={css.textGenres}>
          {genres.map((gen) => gen.name).join(", ")}
        </p>
        <p className={css.userStore}>{`User Store: ${vote_average}`}</p>
        <h4 className={css.titleOverview}>Overview</h4>
        <p className={css.textOverview}>{overview}</p>
        <p className={css.runtime}>{`Runtime: ${runtime} min`}</p>
        <p>
          {production_countries.some(
            (country) =>
              country.name === "Russian Federation" || country.name === "Russia"
          )
            ? "MORDOR - country 404"
            : production_countries.map((country) => country.name).join(", ")}
        </p>
      </div>
    </div>
  );
};

export default MovieDetails;
