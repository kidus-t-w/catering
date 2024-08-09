import styled from 'styled-components';
import cateringImage from "./Hero.png"; // Adjust the path as needed

export const Container = styled.div`
  display: flex;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  max-width: 600px;
  margin: 20px auto;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;

export const Image = styled.div`
  flex: 1;
  background-image: url(${cateringImage});
  background-size: cover;
  background-position: center;
  height: 300px;
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 1.5em;
  color: #333;
`;

export const Highlight = styled.span`
  color: #f47c20; /* Adjust the color as needed */
  font-weight: bold;
`;

export const Text = styled.p`
  margin: 10px 0;
  font-size: 1em;
  color: #666;
`;

export const Button = styled.button`
  align-self: flex-start;
  background-color: transparent;
  border: 2px solid #f47c20; /* Adjust the color as needed */
  color: #f47c20; /* Adjust the color as needed */
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #f47c20; /* Adjust the color as needed */
    color: white;
  }
`;