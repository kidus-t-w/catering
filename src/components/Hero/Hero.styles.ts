import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 92vh;
  background-image: url("https://github.com/kidus-t-w/catering/blob/main/public/assets/hero/Hero_image.png?raw=true");
  background-size: cover;
  background-position: center;
  position: relative;
  color: #fff;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
  }
`;

export const HeroContent = styled.div`
  text-align: center;
  max-width: 600px;
  z-index: 1;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

export const HeroSubtitle = styled.h3`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

export const HeroButtons = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

export const Button = styled(Link)`
  text-decoration: none;
  width: 200px;
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
