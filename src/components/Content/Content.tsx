import { Image, Contents, ContentContainer } from "./ContentStyles";
import { Button } from "../../globalStyles";

interface ContentProps {
  item: {
    title: string;
    description: string;
  };
}
function Content({ item }: ContentProps) {
  return (
    <ContentContainer $layout={item.title === 'Wedding' ? 'row-reverse' : ''}>
      <Image src="./assets/Section.jpg" />
      <Contents $layout = {item.title === 'Wedding'? '700px': '50px'}>
        <h1 >{item.title}</h1>
        <p style={{textAlign: "left"}}>{item.description}</p>
        <Button>Order Now</Button>
      </Contents>
    </ContentContainer>
  );
}

export default Content;
