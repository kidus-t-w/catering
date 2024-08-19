import {motion} from 'framer-motion';
import {
  ServicesContainer,
  ServicesContent,
  ServicesTitle,
  ServicesSubtitle,
  ServicesText,
} from './Services.styles';
const Services = () => {
  return (
    <ServicesContainer>
      <ServicesContent>
      <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 200 },
          }}
        >
        <ServicesTitle>Our Services</ServicesTitle>
        <ServicesSubtitle>Fresh From the Kitchen</ServicesSubtitle>
        <ServicesText>
          We are the right choice for the perfect kitchen and service staff provider as needed to maintain the highest level of food quality, presentation, selection of beverage, and timing to optimize guest's dining experience at your event.
        </ServicesText>
        </motion.div>
      </ServicesContent>
    </ServicesContainer>
  );
};

export default Services;
