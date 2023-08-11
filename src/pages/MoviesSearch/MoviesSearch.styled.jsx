import styled from '@emotion/styled';

export const MoviesSearchContainer = styled.div`
  padding: 20px;
`;

export const SearchInput = styled.input`
  width: 500px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  transition: border-color 0.3s;

  &:focus {
    border-color: #D43369;
  }
 
`;

export const MoviesListContainer = styled.div`
  margin-top: 20px;
`;
