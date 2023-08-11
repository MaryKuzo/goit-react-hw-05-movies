import React from 'react';
import {
  MoviesSearchContainer,
  SearchInput,
  MoviesListContainer
} from './MoviesSearch.styled';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMoviesQuery } from 'services/FetchApi';
import MoviesList from 'components/MoviesList/MoviesList';

const MoviesSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [movies, setMovies] = useState(null);

  const updateQueryString = (e) => {
    const movieValue = e.target.value;
    if (movieValue === '') {
      searchParams.delete('query');
    } else {
      searchParams.set('query', movieValue);
    }
    setSearchParams(searchParams);
  };

  useEffect(() => {
    if (query === '') {
      setMovies(null);
      return;
    }

    getMoviesQuery(query)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => console.log(error));
  }, [query]);

  return (
    <MoviesSearchContainer>
      <SearchInput
        type="text"
        value={query}
        onChange={updateQueryString}
        placeholder="Search movies..."
      />
      {movies && (
        <MoviesListContainer>
          <MoviesList movies={movies} />
        </MoviesListContainer>
      )}
    </MoviesSearchContainer>
  );
};

export default MoviesSearch;

