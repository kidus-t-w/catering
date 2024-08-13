import styled from "styled-components";
import { Link } from "react-router-dom";

export const GetToKnowUsSection = styled.div`
  padding: 0 50px;
  background-color: #a33e3e;

  @media screen and(max-width 960px) {
    padding: 0 30px;
  }
`;
export const AboutContainer = styled.section`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
  background-color: #a33e3e;
  color: #fff;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 30px;
  }
`;

export const SocialIcons = styled.div`
  position: absolute;
  left: 20px;
  top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  a {
    color: #fff;
    background-color: #d32f2f;
    padding: 10px;
    border-radius: 50%;
    text-align: center;
    display: block;
  }

  @media (max-width: 768px) {
    left: 10px;
    top: 10px;
  }

  @media (max-width: 480px) {
    a {
      padding: 8px;
    }
  }
`;

export const AboutContent = styled.div`
  flex: 1;
  max-width: 550px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const AboutTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const AboutText = styled.p`
  font-size: 18px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const AboutButton = styled(Link)`
  text-decoration: none;
  padding: 10px 20px;
  background-color: #d32f2f;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    background-color: #b71c1c;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 8px 16px;
  }
`;

export const AboutImages = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
  }
`;

export const AboutImage = styled.img`
  object-fit: cover;
  width: 100%;
  max-width: 250px;
  height: 500px;
  border-radius: 10px;

  @media (max-width: 768px) {
    max-width: 90%;
    max-height: 300px;
  }
`;
