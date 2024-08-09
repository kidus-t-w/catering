import React from "react";
import {
  FooterContainer,
  LogoSection,
  LinksSection,
  LinksColumn,
  SocialIcons,
  SocialIcon,
  ContactInfo,
} from "./FooterStyles";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <LogoSection>
        <h2>Bakery</h2>
        <p>
          The contrast between those elements creates a highly and modern look.
        </p>
        <SocialIcons>
          <SocialIcon href="#" aria-label="Instagram">
            📸
          </SocialIcon>
          <SocialIcon href="#" aria-label="Facebook">
            📘
          </SocialIcon>
          <SocialIcon href="#" aria-label="Twitter">
            🐦
          </SocialIcon>
          <SocialIcon href="#" aria-label="YouTube">
            🎥
          </SocialIcon>
        </SocialIcons>
      </LogoSection>

      <LinksSection>
        <LinksColumn>
          <h4>ABOUT</h4>
          <a href="#">Partnership</a>
          <a href="#">Terms of Use</a>
          <a href="#">Privacy</a>
        </LinksColumn>

        <LinksColumn>
          <h4>PRODUCT</h4>
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Support</a>
        </LinksColumn>

        <LinksColumn>
          <h4>RESOURCES</h4>
          <a href="#">Career</a>
          <a href="#">Blog</a>
          <a href="#">Legal</a>
        </LinksColumn>

        <LinksColumn>
          <h4>CONTACT</h4>
          <ContactInfo>
            <a href="mailto:ar_fashion.com">ar_fashion.com</a>
            <p>+1564-644-5965</p>
            <p>Los Angeles, CA</p>
          </ContactInfo>
        </LinksColumn>
      </LinksSection>
    </FooterContainer>
  );
};

export default Footer;
