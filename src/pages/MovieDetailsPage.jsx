import { useState, useEffect } from 'react';
import { Outlet, useLocation, useParams, NavLink } from 'react-router-dom';
import { getMovieById } from '../services/ApiRequests';
import BackLink from '../components/MovieDetails/GoBack/GoBack';
import MovieCard from '../components/MovieDetails/MovieCard/MovieCard';
import s from '../pages/MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    async function fetchMovies() {
      try {
        const movies = await getMovieById(movieId);
        setMovie(movies);
      } catch (_) {
        console.error('error');
      }
    }
    fetchMovies();
  }, [movieId]);

  const BackLinkTo = location.state?.from ?? '/movies';

  return (
    <main>
      <section>
        <div className="container">
          <BackLink to={BackLinkTo}>Go Back</BackLink>
          <MovieCard movie={movie} />

          <h2 className={s.title}>Aditional Information</h2>
          <NavLink to="cast" state={{ from: BackLinkTo }} className={s.link}>
            Cast
          </NavLink>
          <NavLink to="reviews" state={{ from: BackLinkTo }} className={s.link}>
            Reviews
          </NavLink>
          <Outlet />
        </div>
      </section>
    </main>
  );
};

export default MovieDetailsPage;
