import { useState, useEffect, Suspense } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import * as API from 'path/to/services/api';
import { BackToLink } from 'components/BackToLink';
import { Box } from 'components/Box';
import { Info, StyledLink } from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const movieId = useParams();
  const location = useLocation();
  const backLinkHref = location.state ?? '/';

  useEffect(() => {
    try {
      async function fetch() {
        const data = await API.getMovieDetails(movieId);
        setMovie(data);
      }
      fetch();
    } catch (error) {
      console.log(error.message);
    }
  }, [movieId]);

  const { poster_path, title, vote_average, overview, genres } = movie;

  return (
    <>
      <BackToLink to={backLinkHref}>Back to movies</BackToLink>
      <Box display="flex" bg="#808080">
        <img
          src={`https://image.tmdb.org/t/p/w400${poster_path}`}
          alt={title}
        />
        <Info>
          <h1>{title}</h1>
          <b>Score: {vote_average}</b>

          <h2>Overiew</h2>
          <p>{overview}</p>

          <h2>Genres</h2>
          <ul>
            {genres && genres.map(({ id, name }) => <li key={id}>{name}</li>)}
          </ul>
        </Info>
      </Box>

      <div>
        <StyledLink to="cast">Cast</StyledLink>
        <StyledLink to="reviews">Reviews</StyledLink>
      </div>

      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
