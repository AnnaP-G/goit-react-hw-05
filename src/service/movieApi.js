import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YjJlM2UwYTViZGVjZWI4NTgyODQ5Y2I1YmJjNmZjZCIsInN1YiI6IjY2MTRmNmQwMGJiMDc2MDE2MjMwZjZkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CjKAlVxY_l_mi0vZRxbdo26b9zsDKvu_eEctK2RwvC8",
};
axios.defaults.params = {
  language: "en-US",
};

// список найпопулярніших фільмів
export const getTrendingMovies = async () => {
  const { data } = await axios.get(`/trending/movie/day`);
  return data.results;
};

// пошук фільму за ключовим словом
export const getMoviesByQuery = async (query) => {
  const { data } = await axios.get(`/search/movie?query=${query}, ${page}`);
  return data.results;
};

// повна інформація про фільм
export const getMovieDetails = async (movieId) => {
  const { data } = await axios.get(`movie/${movieId}`);
  return data;
};

// запит про акторський склад
export const getMovieCredits = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}/credits`);
  return data.cast;
};

// запит ревю
export const getMovieReviews = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}/reviews`);
  return data.results;
};
