import { motion } from "framer-motion";
import {
  GetToKnowUsContainer,
  GetToKnowUsContent,
  GetToKnowUsTitle,
  GetToKnowUsText,
  GetToKnowUsButton,
  GetToKnowUsImages,
  GetToKnowUsImage,
  GetToKnowUsSection,
} from "./GetToKnowUs.styles";

const GetToKnowUs = () => {
  return (
    <GetToKnowUsSection>
      <GetToKnowUsContainer>
        <GetToKnowUsContent>
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
            <GetToKnowUsTitle>Get to Know Us.</GetToKnowUsTitle>
            <GetToKnowUsText>
              Being a valued member of the Lulu Catering Group Hospitality, Lulu
              Catering Services takes pride in its affiliation. Our mission is
              to deliver top-notch catering services accompanied by exceptional
              hospitality.
            </GetToKnowUsText>
            <GetToKnowUsButton to="/GetToKnowUs_us">GetToKnowUs us</GetToKnowUsButton>
          </motion.div>
        </GetToKnowUsContent>
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
          <GetToKnowUsImages>
            <GetToKnowUsImage
              src="/assets/getToKnowUs/get_to_know_us.png"
              alt="Food Image 1"
            />
            <GetToKnowUsImage
              src="/assets/getToKnowUs/get_to_know_us-2.png"
              alt="Food Image 2"
            />
          </GetToKnowUsImages>
        </motion.div>
      </GetToKnowUsContainer>
    </GetToKnowUsSection>
  );
};

export default GetToKnowUs;
