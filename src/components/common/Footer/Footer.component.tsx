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
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/products">Products</FooterLink>
          <FooterLink to="/gallery">Gallery</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>About Us</FooterTitle>
          <FooterLink to="/about_us">About Us</FooterLink>
          <FooterLink to="/contact_us">Contact Us</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>Contact</FooterTitle>
          <p>lulu.catering@gmail.com</p>
          <p>+251-922780651</p>
          <p>Ethiopia, Addis Abba</p>
        </FooterColumn>
      </FooterContent>
      <Copyright>© 2024 Lulu Catering. All rights reserved.</Copyright>
    </FooterContainer>
  );
};

export default Footer;
