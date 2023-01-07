import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import * as API from 'path/to/services/api';

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
    <ul>
      {trendMovies.map(({ id, title }) => {
        return (
          <li key={id}>
            <NavLink to={`/movies/${id}`} state={location}>
              {title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default Home;
