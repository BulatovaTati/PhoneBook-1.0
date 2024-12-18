import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCredits } from '../../../services/ApiRequests';
import ImagePosterPath from '../MovieCard/ImagePosterPath';
import NoInfo from '../../NoInfo/NoInfo';
import Loader from '../../Loader/Loader';

import s from './MovieCast.module.css';

const MovieCast = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    async function fetchGredits() {
      try {
        setIsLoading(true);
        const movies = await getCredits(movieId);
        setCredits(movies.cast);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchGredits();
  }, [movieId]);

  return (
    <section>
      {credits.length === 0 && !isLoading && <NoInfo />}
      {credits.length > 0 && !isLoading && (
        <ul className={s.castList}>
          {isLoading && <Loader />}
          {credits &&
            !isLoading &&
            credits.map(({ id, character, name, profile_path }) => (
              <li key={id} className={s.castItem}>
                <ImagePosterPath path={profile_path} alt={name} />
                <span>{name}</span>
                <span>Character: {character}</span>
              </li>
            ))}
        </ul>
      )}
    </section>
  );
};

export default MovieCast;
