import styled from 'styled-components';

export const EventsContainer = styled.section`
  padding: 50px;
  background-color: #a33e3e;
  color: #fff;
  position: relative;

  @media (max-width: 768px) {
    padding: 30px;
  }
`;

export const EventsTitle = styled.h2`
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

export const EventGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1300px; /* This ensures the content is max 1300px wide */
  margin: 0 auto; /* Center the content on the page */

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

export const EventItem = styled.div`
  text-align: center;
`;

export const EventImage = styled.img`

  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-bottom: 15px;
  border-radius: 50%;

  @media (max-width: 768px) {
    max-width: 100px;
    max-height: 100px;
  }

  @media (max-width: 480px) {
    max-width: 100px;
    max-height: 100px;
  }
`;

export const EventTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const EventDescription = styled.p`
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
