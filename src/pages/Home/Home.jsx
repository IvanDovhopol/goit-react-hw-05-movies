import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as API from 'path/to/services/api';
import PropTypes from 'prop-types';
import { MoviesList, Name, StyledLink, Item } from './Home.styled';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    try {
      async function fetch() {
        const { results } = await API.getTrendingMovies();
        setTrendMovies(results);
      }
      fetch();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <MoviesList>
      {trendMovies.map(({ id, title, poster_path }) => {
        return (
          <Item key={id}>
            <StyledLink to={`/movies/${id}`} state={location}>
              <img
                src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                alt={title}
              />
            </StyledLink>
            <Name>{title}</Name>
          </Item>
        );
      })}
    </MoviesList>
  );
};

export default Home;

Home.propTypes = {
  trendMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
