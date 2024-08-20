import {
  EventSectionContainer,
  TextColumn,
  ImageColumn,
  EventTitle,
  EventSubtitle,
  EventDescription,
  EventImage,
} from "./AboutUs.styles";

const AboutUsSection = () => {
  return (
    <EventSectionContainer>
      <TextColumn>
        <EventTitle>About Us</EventTitle>
        <EventSubtitle>Foodies At Heart.</EventSubtitle>
        <EventDescription>
          Founded in 2023, Lulu delivers an elevated catering and events. With
          over a year of combined event experience, an unmatched level of
          professionalism, and a dash of excitement Lulu produces the best
          events in Addis Ababa.
        </EventDescription>
      </TextColumn>
      <ImageColumn>
        <EventImage
          src="/assets/services/services-bg.png"
          alt="Food Truck Event"
        />
      </ImageColumn>
    </EventSectionContainer>
  );
};

export default AboutUsSection;
