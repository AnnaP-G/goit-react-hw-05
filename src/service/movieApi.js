import axios from "axios";

axios.defaults.baseURL = "'https://api.themoviedb.org/3";
axios.defaults.headers = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YjJlM2UwYTViZGVjZWI4NTgyODQ5Y2I1YmJjNmZjZCIsInN1YiI6IjY2MTRmNmQwMGJiMDc2MDE2MjMwZjZkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CjKAlVxY_l_mi0vZRxbdo26b9zsDKvu_eEctK2RwvC8",
};
axios.defaults.params = {
  language: "en-US",
};



export const getTrendingMovie
