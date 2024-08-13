import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CTAContainer = styled.section`
  background-color: #2f5d6c;
  color: #fff;
  text-align: center;
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 40px 15px;
  }

  @media (max-width: 480px) {
    padding: 30px 10px;
  }
`;

export const CTATitle = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 30px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const CTAText = styled.p`
  font-size: 18px;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const Button = styled(Link)`
  margin-top: 20px;
  text-decoration: none;
  padding: 10px 20px;
  background-color: #fff;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    background-color: gray;
    color: white;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 8px 16px;
  }
`;