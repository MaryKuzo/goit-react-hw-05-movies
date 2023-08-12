import styled from '@emotion/styled';
import { BsFillSearchHeartFill } from 'react-icons/bs';

export const MoviesSearchContainer = styled.div`
  padding: 20px;
`;

export const SearchInput = styled.input`
  width: 500px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  transition: border-color 0.3s;
  padding-left: 30px;
  border-radius: 20px;

  &:focus {
    border-color: #D43369;
  }

`;
export const SearchIcon = styled(BsFillSearchHeartFill)`
  position: absolute;
  top: 20px;
  transform: translateY(-50%);
  left: 500px;
  font-size: 20px;
  color: #D43369;
`;
export const SearchWrapper = styled.div`
  position: relative;
`
export const MoviesListContainer = styled.div`
  margin-top: 20px;
`;
