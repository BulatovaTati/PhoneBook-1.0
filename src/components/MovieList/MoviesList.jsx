import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import s from './MoviesList.module.css';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  const CreateLink = ({ id, title }) => {
    return location.pathname === '/' ? (
      <NavLink className={s.link} to={`movies/${id}`} key={id} state={{ from: location }}>
        {title}
      </NavLink>
    ) : (
      <NavLink className={s.link} to={`${id}`} key={id} state={{ from: location }}>
        {title}
      </NavLink>
    );
  };

  return (
    <ul className={s.trendList}>
      {movies.length > 0 &&
        movies.map(({ id, title }) => (
          <li className={s.card} key={id}>
            <CreateLink id={id} title={title} />
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
