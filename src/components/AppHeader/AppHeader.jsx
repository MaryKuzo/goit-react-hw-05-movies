
import {  NavLinkStyled, Header } from "./AppHeader.styled";

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

const AppHeader = () => {
  return (
    <Header>
      <nav>
        {navItems.map(({ href, text }) => (
          <NavLinkStyled
            key={href}
            to={href}
          >
            {text}
          </NavLinkStyled>
        ))}
      </nav>
   </Header>
  )
}

export default AppHeader
