import {
  AboutContainer,
  AboutContent,
  AboutTitle,
  AboutText,
  AboutButton,
  AboutImages,
  AboutImage,
  GetToKnowUsSection,
} from "./GetToKnowUs.styles";

const GetToKnowUs = () => {
  return (
    <GetToKnowUsSection>
      <AboutContainer>
        <AboutContent>
          <AboutTitle>Get to Know Us.</AboutTitle>
          <AboutText>
            Being a valued member of the Lulu Catering Group Hospitality, Lulu
            Catering Services takes pride in its affiliation. Our mission is to
            deliver top-notch catering services accompanied by exceptional
            hospitality.
          </AboutText>
          <AboutButton to='/about_us'>About us</AboutButton>
        </AboutContent>
        <AboutImages>
          <AboutImage
            src="/assets/getToKnowUs/get_to_know_us.png"
            alt="Food Image 1"
          />
          <AboutImage
            src="/assets/getToKnowUs/get_to_know_us-2.png"
            alt="Food Image 2"
          />
        </AboutImages>
      </AboutContainer>
    </GetToKnowUsSection>
  );
};

export default GetToKnowUs;
