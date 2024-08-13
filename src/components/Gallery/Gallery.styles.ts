import styled from 'styled-components';

export const GalleryContainer = styled.section`
  max-width: 1300px;
  margin: 0 auto;
  padding: 50px 20px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 40px 15px;
  }

  @media (max-width: 480px) {
    padding: 30px 10px;
  }
`;

export const GalleryTitle = styled.h2`
  font-size: 48px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

export const GallerySubtitle = styled.p`
  font-size: 18px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 20px;
  }
`;

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const GalleryItem = styled.div`
  overflow: hidden;
  border-radius: 8px;
`;

export const GalleryImage = styled.img`
  width: 100%;
  height: 250px;
  display: block;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
