import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { animateScroll } from 'react-scroll';
import { getReviews } from '../../../services/ApiRequests';
import NoInfo from '../../NoInfo/NoInfo';
import s from './MovieReviews.module.css';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchGredits() {
      try {
        const movies = await getReviews(movieId);
        setReviews(movies.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchGredits();
  }, [movieId]);

  if (reviews) {
    animateScroll.scrollMore(600);
  }

  return (
    <section>
      {reviews.length === 0 && <NoInfo />}
      <ul className={s.reviewsList}>
        {reviews &&
          reviews.map(({ id, author, content }) => (
            <li key={id} className={s.reviewsItem}>
              <p className={s.reviewsText}>
                <b>Autor: {author}</b>
              </p>
              <p>{content}</p>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default MovieReviews;
