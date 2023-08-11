import {
  NavLinkStyled,
  Header,
  NavHeader
} from "./AppHeader.styled";
import { BiSolidCameraMovie } from "react-icons/bi";

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

const AppHeader = () => {
  return (
    <Header>
      <NavHeader>
        {navItems.map(({ href, text }) => (
          <NavLinkStyled
            key={href}
            to={href}
          ><BiSolidCameraMovie />
            {text}
          </NavLinkStyled>
        ))}
      </NavHeader>
   </Header>
  )
}

export default AppHeader
