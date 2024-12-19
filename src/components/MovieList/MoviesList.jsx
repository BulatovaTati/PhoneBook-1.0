import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import s from './MoviesList.module.css';
import ImagePosterPath from '../MovieDetails/MovieCard/ImagePosterPath';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  const CreateLink = ({ id, poster_path, original_title }) => {
    const to = location.pathname === '/' ? `movies/${id}` : `${id}`;
    return (
      <NavLink className={s.link} to={to} state={{ from: location }}>
        <ImagePosterPath path={poster_path} alt={original_title} />
      </NavLink>
    );
  };

  return (
    <ul className={s.trendList}>
      {movies.length > 0 &&
        movies.map(({ id, poster_path, original_title }) => (
          <li className={s.card} key={id}>
            <CreateLink id={id} poster_path={poster_path} original_title={original_title} />
          </li>
        ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default MoviesList;
