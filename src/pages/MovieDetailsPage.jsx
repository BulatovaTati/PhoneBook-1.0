import { useState, useEffect } from 'react';
import { Outlet, useLocation, useParams, NavLink } from 'react-router-dom';
import { getMovieById } from '../services/ApiRequests';
import BackLink from '../components/MovieDetails/GoBack/GoBack';
import MovieCard from '../components/MovieDetails/MovieCard/MovieCard';
import s from '../pages/MovieDetailsPage.module.css';
import Loader from '../components/Loader/Loader';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const BackLinkTo = location.state?.from ?? '/movies';

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        const movies = await getMovieById(movieId);
        setMovie(movies);
        setIsLoading(false);
      } catch (_) {
        console.error('error');
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies();
  }, [movieId]);

  return (
    <main>
      <section className={s.movies}>
        <div className="container">
          <BackLink to={BackLinkTo}>Go Back</BackLink>
          {isLoading && <Loader />}
          {!isLoading && <MovieCard movie={movie} />}
        </div>
      </section>
      <section className={s.movies}>
        <div className="container">
          <h2 className={s.title}>Aditional Information</h2>
          <div className={s.containerLinks}>
            <NavLink to="cast" state={{ from: BackLinkTo }} className={s.link}>
              Cast
            </NavLink>
            <NavLink to="reviews" state={{ from: BackLinkTo }} className={s.link}>
              Reviews
            </NavLink>
          </div>
          <Outlet />
        </div>
      </section>
    </main>
  );
};

export default MovieDetailsPage;
