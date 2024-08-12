
import {
  HeroContainer,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroButtons,
  Button
} from './Hero.styles';

const Hero = () => {
  return (
    <HeroContainer>
      {/* <SocialIcons>
        <a href="#facebook">FB</a>
        <a href="#instagram">IG</a>
        <a href="#twitter">TW</a>
      </SocialIcons> */}
      <HeroContent>
        <HeroSubtitle>Best Catering Service in Addis Ababa</HeroSubtitle>
        <HeroTitle>Golden Catering Services</HeroTitle>
        <p>We provide catering services for different events such as weddings, graduations, corporate events, and any gatherings</p>
        <HeroButtons>
          <Button>Catering Request</Button>
          <Button>Menu Package</Button>
        </HeroButtons>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
