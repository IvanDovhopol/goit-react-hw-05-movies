import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from 'path/to/services/api';
import PropTypes from 'prop-types';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const movieId = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    try {
      async function fetch() {
        const { results } = await API.getMovieReviews(movieId);
        setReviews(results);
        setError(false);
      }
      fetch();
    } catch (error) {
      console.log(error.message);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }, [movieId]);

  return (
    <>
      {reviews?.length > 0 && (
        <ul>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <b>{author}</b>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      )}
      {reviews.length === 0 && !error && !isLoading && (
        <p>We don`t have any reviews for this movie</p>
      )}
    </>
  );
};

export default Reviews;

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};
