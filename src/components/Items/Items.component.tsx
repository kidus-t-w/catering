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
  { name: "Cheesy turnover", price: "$2.8", image: "/assets/items/item.png" },
  {
    name: "Buttery croissants",
    price: "$4.6",
    image: "/assets/items/item.png",
  },
  { name: "Danish", price: "$2.8", image: "/assets/items/item.png" },
  { name: "Eclair", price: "$2.8", image: "/assets/items/item.png" },
  { name: "Cream puffs", price: "$4.6", image: "/assets/items/item.png" },
  { name: "Mille-Feuille", price: "$2.8", image: "/assets/items/item.png" },
  { name: "Fruit Tartlet", price: "$2.8", image: "/assets/items/item.png" },
  { name: "Palmier", price: "$4.6", image: "/assets/items/item.png" },
  { name: "Profiterole", price: "$2.8", image: "/assets/items/item.png" },
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
