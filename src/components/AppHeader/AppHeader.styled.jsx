import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  max-width: 100%;
  height: 70px;
  padding: 0 40px;
  box-shadow: 0px 4px 36px -21px rgba(0, 0, 0, 0.75);
`;
export const NavHeader = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;`
export const NavLinkStyled = styled(NavLink)`
  font-size: 18px;
  color: #aaaaaa;
  text-decoration: none;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  

  &:hover {
    color: #888888;
  }

  &:not(:last-child) {
    margin-right: 30px;
  }

  &.active {
    font-size: 30px;
    text-decoration: none;
    color: #D43369;

    &:not(:last-child) {
      margin-right: 30px;
    }
  }
`;

