import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByName } from '../services/ApiRequests';
import SearchBar from '../components/SearchBar/SearchBar';
import Loader from '../components/Loader/Loader';
import MoviesList from '../components/MovieList/MoviesList';

import s from '../styles/pages/MoviesPage.module.css';
import customToast from '../components/ErrorMessage/ToastMessage';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (searchQuery === '') return;

    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError(null);
        const movies = await getMovieByName(searchQuery);
        setMovies(movies.results);

        if (movies.results.length === 0) {
          customToast('warn', 'Oops... Try another title');
          return;
        }
      } catch {
        setError('Something went wrong! Please try again later.');
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovies();
  }, [searchQuery]);

  const searchMovie = query => {
    setSearchParams(query !== '' ? { query: query } : {});
  };

  const getMovies = newQuery => {
    if (newQuery === searchParams) return;
    searchMovie(newQuery);
    setMovies([]);
  };

  return (
    <main>
      <SearchBar onChange={getMovies} />
      {error ? (
        <ErrorMessage message={error} />
      ) : (
        <>
          {isLoading && <Loader />}
          <section className={s.movies}>
            <div className="container">
              {movies && !isLoading && <MoviesList movies={movies} />}
            </div>
          </section>
        </>
      )}
    </main>
  );
};

export default MoviesPage;
