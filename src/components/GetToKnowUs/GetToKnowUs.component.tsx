import { motion } from "framer-motion";
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
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <AboutTitle>Get to Know Us.</AboutTitle>
            <AboutText>
              Being a valued member of the Lulu Catering Group Hospitality, Lulu
              Catering Services takes pride in its affiliation. Our mission is
              to deliver top-notch catering services accompanied by exceptional
              hospitality.
            </AboutText>
            <AboutButton to="/about_us">About us</AboutButton>
          </motion.div>
        </AboutContent>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 200 },
          }}
        >
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
        </motion.div>
      </AboutContainer>
    </GetToKnowUsSection>
  );
};

export default GetToKnowUs;
