import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByName } from '../services/ApiRequests';
import Searchbar from '../components/Searchbar/Searchbar';
import Loader from '../components/Loader/Loader';
import MoviesList from '../components/MovieList/MoviesList';
import s from '../pages/MoviesPage.module.css';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (searchQuery === '') return;

    async function fetchMovies() {
      try {
        setIsLoading(true);
        const movies = await getMovieByName(searchQuery);
        setMovies(movies.results);

        if (movies.results.length === 0) {
          console.log('movies.results.length: ', movies.results.length);
        }
      } catch (_) {
        console.error('error');
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
      <Searchbar onChange={getMovies} />
      {isLoading && <Loader />}
      <section className={s.movies}>
        <div className="container">{movies && !isLoading && <MoviesList movies={movies} />}</div>
      </section>
    </main>
  );
};

export default MoviesPage;
