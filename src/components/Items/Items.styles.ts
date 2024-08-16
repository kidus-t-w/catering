import styled from 'styled-components';

export const ItemsContainer = styled.section`
  max-width: 1300px;
  margin: 0 auto;
  padding: 50px 20px;

  @media (max-width: 768px) {
    padding: 40px 15px;
  }

  @media (max-width: 480px) {
    padding: 30px 10px;
  }
`;

export const ItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const ItemCard = styled.div`
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const ItemImage = styled.img`
object-fit: cover;  
width: 100%;
height: 300px;

&:hover {
  transform: scale(1.1);}
  
`;

export const ItemInfo = styled.div`
  padding: 20px;
  text-align: center;
`;

export const ItemName = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
`;

