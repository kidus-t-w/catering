import styled from "styled-components";

export const PictureContainer = styled.section`
  padding: 50px 0;

  @media (max-width: 768px) {
    padding: 30px 20px;
  }

  @media (max-width: 480px) {
    padding: 20px 15px;
  }
`;

export const PictureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const PictureItem = styled.div`
  position: relative;
  overflow: hidden;
`;

export const PictureImage = styled.img`
  height: 25vh;
  width: 100%;
  object-fit: cover;
  display: block;
`;

