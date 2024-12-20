import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../services/ApiRequests';
import Loader from '../components/Loader/Loader';
import MoviesList from '../components/MovieList/MoviesList';
import s from '../styles/pages/HomePage.module.css';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError(null);
        const movies = await getTrendingMovies();
        setMovies(movies.results);
      } catch  {
        setError('Something went wrong! Please try again later.');
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
          {error ? (
            <ErrorMessage message={error} />
          ) : (
            movies && !isLoading && <MoviesList movies={movies} />
          )}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
