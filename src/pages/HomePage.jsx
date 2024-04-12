import { useEffect, useState } from "react";
import { getTrendingMovies } from "../service/movieApi";

const [movies, setMovies] = useState([]);

useEffect(() => {
  const fetchMovies = async () => {
    try {
      const data = await getTrendingMovies();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  fetchMovies();
}, []);

const HomePage = () => {
  return <div>HomePage</div>;
};

export default HomePage;
