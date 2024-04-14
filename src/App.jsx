import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import MoviesPage from "./pages/MoviesPage.jsx";
import MovieDetailsPage from "./pages/MovieDetailsPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";

const App = () => {
  return (
    <>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
