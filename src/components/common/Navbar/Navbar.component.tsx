import { useState } from "react";
import {
  Nav,
  NavbarContainer,
  NavIcon,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  MobileIcon,
} from "./Navbar.styles";
import { FaTimes } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import { IconContext } from "react-icons";
import data from "../../../data/navBarData";
import { MainHeading } from "../../../globalStyles";

function Navbar() {
  const [$show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!$show);
  };

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon src="./assets/Logo.png" alt="logo" />
            <MainHeading $color="white">Lulu Catering</MainHeading>
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {$show ? <FaTimes /> : <CgMenuRight />}
          </MobileIcon>
          {<NavMenu $show={$show}>
            {data.map((item, index) => (
              <NavItem key={index} onClick={handleClick}>
                <NavLinks to={item.link}>{item.title}</NavLinks>
              </NavItem>
            ))}
          </NavMenu>}
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
}

export default Navbar;
