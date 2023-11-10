import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/MoviesServices';
import css from './Reviews.module.css';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const movieReviews = async () => {
      try {
        const review = await fetchReviews(movieId);
        setReviews(review);
      } catch (err) {
        alert('Sorry, something goes wrong');
      }
    };
    movieReviews();
  }, [movieId]);

  return (
    <div className={css.reviewsContainer}>
      {reviews.length !== 0 && (
        <div>
          <ul className={css.reviewsList}>
            {reviews.map(review => (
              <li key={review.id} className={css.reviewsItem}>
                <p className={css.reviewAuthor}>{review.author}</p>
                <p className={css.reviewText}>{review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {reviews.length === 0 && (
        <p className={css.noReviewsText}>
          We don't have any reviews for this movie.
        </p>
      )}
    </div>
  );
};
