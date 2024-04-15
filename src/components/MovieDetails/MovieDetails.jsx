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
    <div>
      <div>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : defaultImg
          }
          alt={title}
        />
      </div>
      <div>
        <h2>{`${title} (${release_date.split("-")[0]})`}</h2>
        <h3>Genres</h3>
        <p>{genres.map((gen) => gen.name).join(", ")}</p>
        <p>{`User Store: ${vote_average}`}</p>
        <h4>Overview</h4>
        <p>{overview}</p>
        <p>{`Runtime: ${runtime} min`}</p>
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
