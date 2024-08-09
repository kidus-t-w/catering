import { RecommendedSection, Image, Card } from "./RecommendedStyles";
import { recommendedData } from "../../data/RecommendedData";
import { Heading } from "../../globalStyles";

function Recommended() {
  return (
    <>
      <Heading $inverse={true} $mb="2rem" $mt="2rem">Recommendations</Heading>
      <RecommendedSection>
        {recommendedData.map((item, key) => (
          <Card key={key}>
            <Image src={item.img} />
            <div style={{ padding: "1rem" }}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>{item.price}</p>
            </div>
          </Card>
        ))}
      </RecommendedSection>
    </>
  );
}

export default Recommended;
