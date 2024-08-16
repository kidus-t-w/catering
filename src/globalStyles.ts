import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box;
}
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 50px;

  @media screen and(max-width 960px) {
    padding: 0 30px;
  }
`;

export const MainHeading = styled.h1<{
  $color?: string;
}>`
  color: ${({ $color }) => $color || "black"};
  font-size: 1.8rem;
  line-height: 2rem;
`;
export const Heading = styled.h2`
  margin-top: 6rem;
  text-align: center;
  font-size: 3rem;
`;
export const SubHeading = styled.h3``;
export const TextWrapper = styled.p``;
export const Row = styled.div``;
export const Column = styled.div``;
export const Button = styled.button``;

export default GlobalStyle;
