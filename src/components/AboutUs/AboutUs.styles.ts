import styled from 'styled-components';

export const EventSectionContainer = styled.section`
  display: flex;
  max-width: 1300px;
  margin: 0 auto;
  margin-bottom: 50px;
  padding: 0 20px;
  padding-top: 50px;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 40px 15px;
  }

  @media (max-width: 480px) {
    padding: 30px 10px;
  }
`;

export const TextColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 20px;

  @media (max-width: 1024px) {
    padding-right: 0;
    margin-bottom: 30px;
  }
`;

export const ImageColumn = styled.div`
  flex: 1;

  @media (max-width: 1024px) {
    text-align: center;
  }
`;

export const EventTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 32px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

export const EventSubtitle = styled.h3`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const EventDescription = styled.p`
  font-size: 18px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const EventImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;

  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
  }
`;
