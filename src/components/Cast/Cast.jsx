import { useEffect } from 'react';
import * as API from 'path/to/services/api';
import { useState } from 'react';
import { Actors } from './Cast.styled';
import defaultImg from 'path/to/placeholder-photo.jpg';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const movieId = useParams();

  useEffect(() => {
    try {
      async function fetch() {
        const { cast } = await API.getMovieCredits(movieId);
        setActors(cast);
      }
      fetch();
    } catch (error) {
      console.log(error.message);
    }
  }, [movieId]);

  return (
    <Actors>
      {actors.map(({ cast_id, profile_path, name, character }) => {
        return (
          <li key={cast_id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w200${profile_path}`
                  : defaultImg
              }
              alt={name}
            />

            <p>{name}</p>
            <p>{character}</p>
          </li>
        );
      })}
    </Actors>
  );
};

export default Cast;
