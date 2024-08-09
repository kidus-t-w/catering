import MyForm from "../components/Form/Form";
import {
  Column,
  Container,
  Heading,
  MainHeading,
  Row,
  TextWrapper,
} from "../globalStyles";
export default function CoontactUs() {
  return (
    <>
      <MainHeading $inverse={true}>ContactUs</MainHeading>
      <Container>
        <Row $shadow="5px 5px 5px grey" $radius={"20px 20px 20px 20px"}>
          <Column $width="50%" $bg={"#2596be"} $padding="80px" $radius={"20px 0px 0px 20px"}>
            <Heading $align="left" $mb="1rem">Have questions? Feel free to write us</Heading>
            <TextWrapper $color="#fff" $align="left">
              Lulu Catering is a beautiful and scenic place located in a serene
              environment. The tea garden boasts of miles of neatly trimmed
              green tea plants that give off a fresh, flowery aroma that is sure
              to captivate the senses.
            </TextWrapper>
          </Column>
          <Column $width="50%" $padding="80px" $radius={"0px 20px 20px 0px"} >
            <MyForm />
          </Column>
        </Row>
      </Container>
    </>
  );
}
