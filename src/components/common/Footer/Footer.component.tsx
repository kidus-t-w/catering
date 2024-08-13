import { FaFacebook, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import {
  FooterContainer,
  FooterContent,
  FooterColumn,
  FooterTitle,
  FooterLink,
  SocialIcons,
  Copyright,
} from "./Footer.styles";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <FooterTitle>Lulu Catering</FooterTitle>
          <p>
            We provide catering services for different events such as weddings,
            graduations, corporate events, and any gatherings
          </p>
          <SocialIcons>
            <a
              href="https://www.instagram.com/lulueventsandcatering/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagramSquare />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <FaSquareXTwitter />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </SocialIcons>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>Link</FooterTitle>
          <FooterLink href="#">Home</FooterLink>
          <FooterLink href="#">Products</FooterLink>
          <FooterLink href="#">Gallery</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>About Us</FooterTitle>
          <FooterLink href="#">About Us</FooterLink>
          <FooterLink href="#">Contact Us</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>Contact</FooterTitle>
          <FooterLink href="#">lulu.catering@gmail.com</FooterLink>
          <FooterLink href="#">+251-922780651</FooterLink>
          <FooterLink href="#">Ethiopia, Addis Abba</FooterLink>
        </FooterColumn>
      </FooterContent>
      <Copyright>© 2024 Lulu Catering. All rights reserved.</Copyright>
    </FooterContainer>
  );
};

export default Footer;
