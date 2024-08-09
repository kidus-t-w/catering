import {
  Container,
  Image,
  Content,
  Title,
  Highlight,
  Button,
  Text,
} from "./CateringStyles";

import { Row } from "../../globalStyles";

const cateringData = [
  {
    title: "Corporate & Private Catering",
    highlight: "THE SACTOMOFO DIFFERENCE",
    description:
      "Food is the most labor-intensive part of any gathering and we make it simple. Let us exceed your expectations. We can accommodate a wide range of event scenarios with our food trucks,all while making you look like a star.",
  },
  {
    title: "Workplace Lunch",
    highlight: "MAKE LUNCH HOUR FUN",
    description:
      "Food is the most labor-intensive part of any gathering and we make it simple. Let us exceed your expectations. We can accommodate a wide range of event scenarios with our food trucks,all while making you look like a star.",
  },
];

const Catering = () => {
  return (
    <Row $width="1300px" $margin="0 auto">
      {cateringData.map((item, index) => (
        <Container key={index}>
          <Image />
          <Content>
            <Title>{item.title}</Title>
            <Highlight>{item.highlight}</Highlight>
            <Text>
              {item.description}
            </Text>
            <Button>BOOK CATERING</Button>
          </Content>
        </Container>
      ))}
    </Row>
  );
};

export default Catering;
