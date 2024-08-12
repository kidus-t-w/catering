import styled from 'styled-components';

export const EventTypesContainer = styled.section`
  max-width: 1300px;
  margin: 0 auto;
  padding: 50px 20px;

  @media (max-width: 768px) {
    padding: 30px 20px;
  }

  @media (max-width: 480px) {
    padding: 20px 15px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 48px;
  text-align: center;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    margin-bottom: 20px;
  }
`;

export const EventOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

export const EventItem = styled.div`
  position: relative;
  overflow: hidden;

  &:hover ${EventOverlay} {
    opacity: 1;
  }
`;

export const EventGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: minmax(200px, auto);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

export const EventImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

export const EventTitle = styled.h3`
  color: #fff;
  font-size: 24px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const LearnMoreButton = styled.button`
  padding: 10px 20px;
  background-color: transparent;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #fff;
    color: #000;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
