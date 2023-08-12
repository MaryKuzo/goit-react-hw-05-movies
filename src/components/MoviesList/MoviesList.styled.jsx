import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { MdLocalMovies } from 'react-icons/md';

export const StyledFilmIcon = styled(MdLocalMovies)`
  fill: #D43369;
  margin-right: 5px;
  vertical-align: middle;
`;

export const MoviesListContainer = styled.div`
  margin-top: 20px;
  padding-left: 40px;
`;

export const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

export const MovieItem = styled.li`
  margin-bottom: 10px;
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: #333;

  &:hover {
    color: #D43369;
  }
`;
