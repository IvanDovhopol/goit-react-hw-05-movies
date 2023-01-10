import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import * as API from 'path/to/services/api';
import {
  SearchField,
  Form,
  SearchButton,
  Label,
  Input,
  MoviesList,
  Name,
  Item,
  StyledLink,
} from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useSearchParams();
  const query = searchQuery.get('query');
  const location = useLocation();

  useEffect(() => {
    try {
      async function fetch() {
        if (!query) return;

        const { results } = await API.getMoviesByKeyword(query);
        setMovies(results);
      }
      fetch();
    } catch (error) {
      console.log(error.message);
    }
  }, [query, setMovies]);

  function handleSubmit(e) {
    e.preventDefault();

    const query = e.currentTarget.elements.search.value.toLowerCase();
    setSearchQuery({ query });

    e.target.reset();
  }

  return (
    <>
      <SearchField>
        <Form onSubmit={handleSubmit}>
          <SearchButton type="submit">
            <Label>Search</Label>
          </SearchButton>

          <Input
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
          />
        </Form>
      </SearchField>

      <MoviesList>
        {movies.map(({ id, poster_path, title }) => {
          return (
            <Item key={id}>
              <StyledLink to={`/movies/${id}`} state={location}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                  alt={title}
                />
              </StyledLink>
              <Name>{title}</Name>
            </Item>
          );
        })}
      </MoviesList>
    </>
  );
};

export default Movies;
