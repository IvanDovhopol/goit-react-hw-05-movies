import { useState, useEffect } from 'react';
import * as API from 'path/to/services/api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    try {
      async function fetch() {
        const { results } = await API.getMovieReviews();
        setReviews(results);
      }
      fetch();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <ul>
      {reviews.length > 0 ? (
        reviews.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <b>{author}</b>
              <p>{content}</p>
            </li>
          );
        })
      ) : (
        <p>We don`t have any reviews for this movie</p>
      )}
    </ul>
  );
};

export default Reviews;
