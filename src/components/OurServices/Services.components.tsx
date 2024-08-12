import {
  ServicesContainer,
  ServicesContent,
  ServicesTitle,
  ServicesSubtitle,
  ServicesText,
  SocialIcons
} from './Services.styles';

const Services = () => {
  return (
    <ServicesContainer>
      <ServicesContent>
        <ServicesTitle>Our Services</ServicesTitle>
        <ServicesSubtitle>Fresh From the Kitchen</ServicesSubtitle>
        <ServicesText>
          We are the right choice for the perfect kitchen and service staff provider as needed to maintain the highest level of food quality, presentation, selection of beverage, and timing to optimize guest's dining experience at your event.
        </ServicesText>
      </ServicesContent>
    </ServicesContainer>
  );
};

export default Services;
