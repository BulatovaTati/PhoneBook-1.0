import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../services/ApiRequests';
import Loader from '../components/Loader/Loader';
import MoviesList from '../components/MovieList/MoviesList';
import s from '../pages/HomePage.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        const movies = await getTrendingMovies();
        setMovies(movies.results);
        setIsLoading(false);
      } catch (_) {
        console.log('error');
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies();
  }, []);

  return (
    <main>
      <section className={s.movies}>
        <div className="container">
          <h1 className={s.moviesTitle}>Trendings today</h1>
          {isLoading && <Loader />}
          {movies && !isLoading && <MoviesList movies={movies} />}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
