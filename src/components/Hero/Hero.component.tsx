import {
  HeroContainer,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroButtons,
  Button,
} from "./Hero.styles";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroSubtitle>Best Catering Service in Addis Ababa</HeroSubtitle>
        <HeroTitle>Lulu Catering Services</HeroTitle>
        <p>
          We provide catering services for different events such as weddings,
          graduations, corporate events, and any gatherings
        </p>
        <HeroButtons>
          <Button to="/contact_us">Request Catering</Button>
          <Button to="/about_us">About Us</Button>
        </HeroButtons>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
