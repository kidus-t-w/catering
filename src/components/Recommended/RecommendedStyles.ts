import styled from "styled-components";
import { Container } from "../../globalStyles";

export const RecommendedSection = styled(Container)`
  display: flex;
  justify-content: space-evenly;
`;

export const Card = styled.div`
  width: 300px;
  height: 400px;
  background: white;
  box-shadow: 5px 5px 5px grey;
  padding: 16px;
  border-radius: 2rem;
`;

export const Image = styled.img`
  width: 250px;
  height: 250px;
`;
