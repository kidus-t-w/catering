import {  Image, AboutUsSection, Paragraph} from "./AboutUsStyles";
import { Row, Container, Heading, TextWrapper  } from "../../globalStyles";
function AboutUs() {
  return (
    <AboutUsSection>
      <Container>
        <Heading $inverse={true}>
          AboutUs
        </Heading>
        <Row $gap="2rem">
          <div>
            <TextWrapper $align="center" $size="3rem" $weight="7px">Product</TextWrapper>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            adipisci consectetur nihil, vel blanditiis ipsam totam ad facere
            perferendis quae in, labore error impedit nostrum quos, velit
            possimus repudiandae ea!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            adipisci consectetur nihil, vel blanditiis ipsam totam ad facere
            perferendis quae in, labore error impedit nostrum quos, velit
            possimus repudiandae ea!
          </Paragraph>
          </div>
          <Image src="./assets/cupcake.png" />
          <div>
            <TextWrapper $align="center" $size="3rem" $weight="7px" $spacing="">Quality</TextWrapper>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            adipisci consectetur nihil, vel blanditiis ipsam totam ad facere
            perferendis quae in, labore error impedit nostrum quos, velit
            possimus repudiandae ea!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            adipisci consectetur nihil, vel blanditiis ipsam totam ad facere
            perferendis quae in, labore error impedit nostrum quos, velit
            possimus repudiandae ea!
          </Paragraph>
          </div>
        </Row>
      </Container>
    </AboutUsSection>
  );
}

export default AboutUs;
