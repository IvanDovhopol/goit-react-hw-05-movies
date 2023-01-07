import { useEffect } from 'react';
import * as API from 'path/to/services/api';
import { useState } from 'react';
import { Actors } from './Cast.styled';
import defaultImg from 'path/to/placeholder-photo.jpg';

const Cast = () => {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    try {
      async function fetch() {
        const { cast } = await API.getMovieCredits();
        setActors(cast);
      }
      fetch();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

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

            <b>{name}</b>
            <br />
            <b>{character}</b>
          </li>
        );
      })}
    </Actors>
  );
};

export default Cast;
