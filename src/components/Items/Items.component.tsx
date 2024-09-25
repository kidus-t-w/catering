import { Heading } from "../../globalStyles";
import {
  ItemsContainer,
  ItemsGrid,
  ItemCard,
  ItemImage,
  ItemInfo,
  ItemName,
} from "./Items.styles";

const items = [
  { name: "Cup Cake", price: "$2.8", image: "https://github.com/kidus-t-w/catering/blob/main/public/assets/items/cupcake.png?raw=true" },
  { name: "Muffin", price: "$4.6", image: "https://github.com/kidus-t-w/catering/blob/main/public/assets/items/muffin.png?raw=true" },
  { name: "Pizza", price: "$2.8", image: "https://github.com/kidus-t-w/catering/blob/main/public/assets/items/pizza.png?raw=true" },
  { name: "Cookie", price: "$2.8", image: "https://github.com/kidus-t-w/catering/blob/main/public/assets/items/cookie.png?raw=true" },
  {
    name: "Fruit Punch",
    price: "$4.6",
    image: "https://github.com/kidus-t-w/catering/blob/main/public/assets/items/fruitPunch.png?raw=true",
  },
  { name: "Cream Cake", price: "$2.8", image: "https://github.com/kidus-t-w/catering/blob/main/public/assets/items/creamCake.png?raw=true" },
  { name: "Dry Cake", price: "$2.8", image: "https://github.com/kidus-t-w/catering/blob/main/public/assets/items/dryCake.png?raw=true" },
  { name: "Baggel", price: "$4.6", image: "https://github.com/kidus-t-w/catering/blob/main/public/assets/items/baggel.png?raw=true" },
  { name: "Donut", price: "$2.8", image: "https://github.com/kidus-t-w/catering/blob/main/public/assets/items/donut.png?raw=true" },
];

const ItemsSection = () => {
  return (
    <>
      <Heading>OUR PRODUCTS</Heading>
      <ItemsContainer>
        <ItemsGrid>
          {items.map((item, index) => (
            <ItemCard key={index}>
              <ItemImage src={item.image} alt={item.name} />
              <ItemInfo>
                <ItemName>{item.name}</ItemName>
              </ItemInfo>
            </ItemCard>
          ))}
        </ItemsGrid>
      </ItemsContainer>
    </>
  );
};

export default ItemsSection;
