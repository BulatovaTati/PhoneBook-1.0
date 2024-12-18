import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { animateScroll } from 'react-scroll';
import { getCredits } from '../../../services/ApiRequests';
import ImagePosterPath from '../MovieCard/ImagePosterPath';
import NoInfo from '../../NoInfo/NoInfo';
import s from './MovieCast.module.css';

const MovieCast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    async function fetchGredits() {
      try {
        const movies = await getCredits(movieId);
        setCredits(movies.cast);
      } catch (error) {
        console.log(error);
      }
    }
    fetchGredits();
  }, [movieId]);

  if (credits) {
    animateScroll.scrollMore(500);
  }

  return (
    <section>
      {credits.length === 0 && <NoInfo />}
      <ul className={s.castList}>
        {credits &&
          credits.map(({ id, character, name, profile_path }) => (
            <li key={id} className={s.castItem}>
              <ImagePosterPath path={profile_path} alt={name} />
              <span>{name}</span>
              <span>Character: {character}</span>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default MovieCast;
