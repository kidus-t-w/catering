import styled from "styled-components";
import { Link } from "react-router-dom";

export const GetToKnowUsSection = styled.div`
  padding: 0 50px;
  background-color: #a33e3e;
  background-image: url("/assets/pattern.svg");
  background-attachment: fixed;
  background-repeat: repeat;
  background-size: auto;
  background-position: center;
  
  @media screen and(max-width 960px) {
    padding: 0 30px;
  }
`;
export const GetToKnowUsContainer = styled.section`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
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

export const GetToKnowUsContent = styled.div`
  flex: 1;
  max-width: 550px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const GetToKnowUsTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const GetToKnowUsText = styled.p`
  font-size: 18px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const GetToKnowUsButton = styled(Link)`
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

export const GetToKnowUsImages = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 10px;
    margin-top: 20px;
  }
`;

export const GetToKnowUsImage = styled.img`
  object-fit: cover;
  width: 100%;
  max-width: 250px;
  height: 500px;
  border-radius: 10px;

  @media (max-width: 768px) {
    max-width: 80%;
    max-height: 200px;
  }
`;
