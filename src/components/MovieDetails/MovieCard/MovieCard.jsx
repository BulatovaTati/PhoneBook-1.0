import PropTypes from 'prop-types';
import ImagePosterPath from './ImagePosterPath';
import s from '../MovieCard/MovieCard.module.css';

const MovieCard = ({
  movie: {
    original_title = 'Unknown Title',
    overview = 'No overview available.',
    genres = [],
    poster_path,
    vote_average = 0,
    release_date,
  },
}) => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <ImagePosterPath path={poster_path} alt={original_title} />
      </div>
      <div className={s.cardContainer}>
        <h1>
          {original_title} {release_date?.slice(0, 4)}
        </h1>
        <p>User Score: {(vote_average * 10).toFixed(1)}%</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <ul className={s.genresList}>
          {genres &&
            genres.map(({ id, name }) => (
              <li className={s.cardItem} key={id}>
                {name}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  original_title: PropTypes.string,
  overview: PropTypes.string,
  genres: PropTypes.arrayOf({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
  poster_path: PropTypes.string,
  vote_average: PropTypes.number,
  release_date: PropTypes.string,
};

export default MovieCard;
