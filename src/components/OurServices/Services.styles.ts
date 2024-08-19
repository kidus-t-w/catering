import styled from "styled-components";

export const ServicesContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url("/assets/services/services-bg.png");
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* Makes the background image fixed */
  position: relative;
  color: #fff;
  overflow: hidden; /* Ensure the pseudo-element doesn't overflow */

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Adjust the opacity as needed */
    z-index: 1; /* Ensure the overlay is above the background image */
  }

  /* Ensure the content is above the overlay */
  > * {
    position: relative;
    z-index: 2;
  }

  @media (max-width: 768px) {
    padding: 20px;
    height: auto;
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

export const ServicesContent = styled.div`
  text-align: center;
  max-width: 800px;
  padding: 20px;
  

  @media (max-width: 768px) {
    max-width: 90%;
    padding: 15px;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    padding: 10px;
  }
`;

export const ServicesTitle = styled.h2`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

export const ServicesSubtitle = styled.h3`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const ServicesText = styled.p`
  font-size: 18px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
