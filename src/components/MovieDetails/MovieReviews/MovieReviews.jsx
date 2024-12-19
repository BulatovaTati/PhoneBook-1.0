import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { animateScroll } from 'react-scroll';
import { getReviews } from '../../../services/ApiRequests';
import NoInfo from '../../NoInfo/NoInfo';
import s from './MovieReviews.module.css';
import Loader from '../../Loader/Loader';

const MovieReviews = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchGredits() {
      try {
        setIsLoading(true);
        const movies = await getReviews(movieId);
        setReviews(movies.results);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchGredits();
  }, [movieId]);

  if (reviews) {
    animateScroll.scrollMore(600);
  }
  
  return (
    <>
      {reviews.length === 0 && !isLoading && <NoInfo />}
      {isLoading && <Loader />}
      {reviews.length > 0 && !isLoading && (
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
      )}
    </>
  );
};

export default MovieReviews;
