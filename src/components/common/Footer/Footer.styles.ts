import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #f8f8f8;
  padding: 50px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 40px 15px;
  }

  @media (max-width: 480px) {
    padding: 30px 10px;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1200px;
  width: 100%;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }
`;

export const FooterColumn = styled.div`
  flex: 1;
  margin: 10px;
  min-width: 200px;
  max-width: 250px;
  
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const FooterTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const FooterLink = styled(Link)`
  display: block;
  color: #333;
  margin-bottom: 10px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    margin-bottom: 8px;
  }

  @media (max-width: 480px) {
    margin-bottom: 6px;
  }
`;

export const SocialIcons = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 15px;

  a {
    color: #333;
    font-size: 20px;

    &:hover {
      color: #000;
    }
  }
`;

export const Copyright = styled.div`
  font-size: 14px;
  color: #777;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;
