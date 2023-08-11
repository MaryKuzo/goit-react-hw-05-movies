import React from 'react';
import {  useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  MoviesListContainer,
  Title,
  MovieItem,
  MovieLink,
  StyledFilmIcon
} from './MoviesList.styled';


const MoviesList = ({ movies, titlePage = '' }) => {
  const location = useLocation();

  return (
    <MoviesListContainer>
      {titlePage && <Title><StyledFilmIcon />{titlePage}</Title>}
      <ul>
        {movies.map(({ id, title, name }) => (
          <MovieItem key={id}>
            <MovieLink to={`/movies/${id}`} state={{ from: location }}>
              {title || name}
            </MovieLink>
          </MovieItem>
        ))}
      </ul>
    </MoviesListContainer>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
    }).isRequired
  ),
  titlePage: PropTypes.string,
};

export default MoviesList;
