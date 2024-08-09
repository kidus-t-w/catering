import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Feature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 250px;
  margin: 20px;
  text-align: center;

  @media (max-width: 768px) {
    max-width: 90%;
    margin: 15px 0;
  }
`;

export const Icon = styled.div`
  font-size: 48px;
  margin-bottom: 10px;
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  color: #d32f2f;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #555;
`;
