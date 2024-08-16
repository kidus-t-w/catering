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
  { name: "Cup Cake", price: "$2.8", image: "/assets/items/cupcake.png" },
  { name: "Muffin", price: "$4.6", image: "/assets/items/muffin.png" },
  { name: "Pizza", price: "$2.8", image: "/assets/items/pizza.png" },
  { name: "Cookie", price: "$2.8", image: "/assets/items/cookie.png" },
  {
    name: "Fruit Punch",
    price: "$4.6",
    image: "/assets/items/fruitPunch.png",
  },
  { name: "Cream Cake", price: "$2.8", image: "/assets/items/creamCake.png" },
  { name: "Dry Cake", price: "$2.8", image: "/assets/items/dryCake.png" },
  { name: "Baggel", price: "$4.6", image: "/assets/items/baggel.png" },
  { name: "Donut", price: "$2.8", image: "/assets/items/donut.png" },
];

const ItemsSection = () => {
  return (
    <>
      <Heading>Our Products</Heading>
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
