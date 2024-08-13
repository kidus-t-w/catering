
import {
  ContactUsContainer,
  TestimonialSection,
  Text,
  ContactFormSection,
  ContactTitle,
  ContactForm,
  FormInput,
  FormTextArea,
  FormButton,
  SocialIcons,
} from "./ContactUs.styles";
import { FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { FaFacebook, FaSquareXTwitter } from "react-icons/fa6";

const ContactUsSection = () => {
  return (
    <ContactUsContainer>
      <TestimonialSection>
        <Text>
          Please feel free to get in touch using the form below. We'd love to
          hear your thoughts & answer any questions you may have!
        </Text>
      </TestimonialSection>
      <ContactFormSection>
        <ContactTitle>
          Get in <span>Touch</span>
        </ContactTitle>
        <ContactForm>
          <FormInput type="text" placeholder="Name *" required />
          <FormInput type="email" placeholder="Email" required />
          <FormInput type="tel" placeholder="Phone number *" required />
          <FormTextArea placeholder="How can we help you?" />
          <FormButton type="submit">SEND</FormButton>
        </ContactForm>
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
      </ContactFormSection>
    </ContactUsContainer>
  );
};

export default ContactUsSection;
