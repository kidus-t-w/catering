import {
  HeroContainer,
  HeroSection,
  HeroButton,
  HeroText,
  ButtonWrapper,
  HeroImage,
} from "./HeroStyles";
import { MainHeading } from "../../globalStyles";

function Hero() {
  return (
    <HeroSection>
      <HeroImage src="./assets/Hero.png" />
      <HeroContainer>
        <MainHeading>Welcome To LULU Catering</MainHeading>
        <HeroText>Get The Best From Us</HeroText>
        <ButtonWrapper>
          <HeroButton >ContactUs</HeroButton>
          <HeroButton>Book Now</HeroButton>
        </ButtonWrapper>
      </HeroContainer>
    </HeroSection>
  );
}

export default Hero;
