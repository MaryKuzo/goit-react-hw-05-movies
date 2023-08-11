import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const GoBackButtonContainer = styled.div`
  margin-top: 20px;
  padding-left: 20px
`;

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  background-color: #333;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  position: relative;
  transition: background-color 0.3s;

  &:hover {
    background-color: #666;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  margin-right: 5px;
`;
