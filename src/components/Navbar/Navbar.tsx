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
} from "./NavbarStyles";
import { FaTimes } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import { IconContext } from "react-icons";
import { data } from "../../data/navbarData";

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
            Lulu Events & Catering
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {$show ? <FaTimes /> : <CgMenuRight />}
          </MobileIcon>
          <NavMenu $show={$show}>
            {data.map((item, index) => (
              <NavItem key={index}>
                <NavLinks to={item.to}>{item.text}</NavLinks>
              </NavItem>
            ))}
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
}

export default Navbar;
