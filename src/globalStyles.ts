import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  }`;

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 50px;

  @media screen and(max-width 960px) {
    padding: 0 30px;
  }
`;

export const MainHeading = styled.h1<{ $inverse?: boolean }>`
  font-size: clamp(2.3rem, 6vw, 4.5rem);
  color: ${({ $inverse }) => ($inverse ? "$403ae3" : "#fff")};
  margin-bottom: 2rem;
  letter-spacing: 4px;
  text-align: center;
`;
export const Heading = styled.h2<{
  $margin?: string;
  $mt?: string;
  $mb?: string;
  $inverse?: boolean;
  $width?: string;
  $align?: string;

}>`
  font-size: clamp(1.3rem, 13vw, 3.1rem);
  margin: ${({ $margin }) => ($margin ? $margin : "")};
  margin-top: ${({ $mt }) => ($mt ? $mt : "")};
  margin-bottom: ${({ $mb }) => ($mb ? $mb : "")};
  color: ${({ $inverse }) => ($inverse ? "$403ae3" : "#fff")};
  letter-spacing: 0.4rem;
  line-height: 1.06;
  text-align: ${({$align}) => ($align? $align: "center")};
  width: ${({ $width }) => ($width ? $width : "100%")};
`;

export const TextWrapper = styled.p<{
  $align?: string;
  $mb?: string;
  $color?: string;
  $size?: string;
  $margin?: string;
  $padding?: string;
  $weight?: string;
  $spacing?: string;
  $mt?: string;
}>`
  color: ${({ $color }) => ($color ? $color : "")};
  font-size: ${({ $size }) => ($size ? $size : "")};
  margin: ${({ $margin }) => ($margin ? $margin : "")};
  margin-top: ${({ $mt }) => ($mt ? $mt : "")};
  margin-bottom: ${({ $mb }) => ($mb ? $mb : "")};
  padding: ${({ $padding }) => ($padding ? $padding : "")};
  font-weight: ${({ $weight }) => ($weight ? $weight : "")};
  letter-spacing: ${({ $spacing }) => ($spacing ? $spacing : "")};
  text-align: ${({$align}) => ($align? $align: "")}
`;
export const Button = styled.button`
  border-radius: 4px;
  background: red;
  white-space: nowrap;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  outline: none;
  border: 2px solid #fff;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  border-radius: 10px;

  &:before {
    background: #fff;
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: all 0.6s ease;
    width: 100%;
    height: 0%;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:hover:before {
    height: 500%;
  }

  &:hover {
    color: black;
  }
`;

export const Section = styled.section<{
  $margin?: string;
  $padding?: string;
  $inverse?: string;
  $position?: string;
  $width?: string;
  $maxWidth?: string;
  $minWidth?: string;
  $height?: string;
  $maxHeight?: string;
  $minHeight?: string;
  $smPadding?: string;
}>`
  margin: ${({ $margin }) => ($margin ? $margin : "")};
  padding: ${({ $padding }) => ($padding ? $padding : "")};
  background: ${({ $inverse }) => ($inverse ? "$403ae3" : "#fff")};
  position: ${({ $position }) => ($position ? $position : "")};
  width: ${({ $width }) => ($width ? $width : "")};
  max-width: ${({ $maxWidth }) => ($maxWidth ? $maxWidth : "")};
  min-width: ${({ $minWidth }) => ($minWidth ? $minWidth : "")};
  height: ${({ $height }) => ($height ? $height : "")};
  max-height: ${({ $maxHeight }) => ($maxHeight ? $maxHeight : "")};
  min-height: ${({ $minHeight }) => ($minHeight ? $minHeight : "")};

  @media screen and (max-width: 768px) {
    padding: ${({ $smPadding }) => ($smPadding ? $smPadding : "70px 0")};
  }
`;

export const Row = styled.div<{
  $justify?: string;
  $align?: string;
  $gap?: string;
  $padding?: string;
  $position?: string;
  $margin?: string;
  $width?: string;
  $minWidth?: string;
  $maxWidth?: string;
  $height?: string;
  $minHeight?: string;
  $maxHeight?: string;
  $shadow?: string;
  $radius?: string;
}>`
  display: flex;
  justify-content: ${({ $justify }) => ($justify ? $justify : "")};
  align-items: ${({ $align }) => ($align ? $align : "")};
  gap: ${({ $gap }) => ($gap ? $gap : "")};
  padding: ${({ $padding }) => ($padding ? $padding : "")};
  position: ${({ $position }) => ($position ? $position : "")};
  margin: ${({ $margin }) => ($margin ? $margin : "")};
  width: ${({ $width }) => ($width ? $width : "auto")};
  min-width: ${({ $minWidth }) => ($minWidth ? $minWidth : "auto")};
  max-width: ${({ $maxWidth }) => ($maxWidth ? $maxWidth : "auto")};
  height: ${({ $height }) => ($height ? $height : "auto")};
  min-height: ${({ $minHeight }) => ($minHeight ? $minHeight : "auto")};
  max-height: ${({ $maxHeight }) => ($maxHeight ? $maxHeight : "auto")};
  box-shadow: ${({$shadow}) => ($shadow? $shadow: '')};
  border-radius: ${({$radius}) => ($radius? $radius: '')};
`;

export const Column = styled.div<{
  $justify?: string;
  $align?: string;
  $gap?: string;
  $padding?: string;
  $position?: string;
  $margin?: string;
  $width?: string;
  $minWidth?: string;
  $maxWidth?: string;
  $height?: string;
  $minHeight?: string;
  $maxHeight?: string;
  $bg?: string;
  $radius?: string;
}>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ $justify }) => ($justify ? $justify : "")};
  align-items: ${({ $align }) => ($align ? $align : "")};
  gap: ${({ $gap }) => ($gap ? $gap : "")};
  padding: ${({ $padding }) => ($padding ? $padding : "")};
  position: ${({ $position }) => ($position ? $position : "")};
  margin: ${({ $margin }) => ($margin ? $margin : "")};
  width: ${({ $width }) => ($width ? $width : "auto")};
  min-width: ${({ $minWidth }) => ($minWidth ? $minWidth : "auto")};
  max-width: ${({ $maxWidth }) => ($maxWidth ? $maxWidth : "auto")};
  height: ${({ $height }) => ($height ? $height : "auto")};
  min-height: ${({ $minHeight }) => ($minHeight ? $minHeight : "auto")};
  max-height: ${({ $maxHeight }) => ($maxHeight ? $maxHeight : "auto")};
  background: ${({$bg}) => ($bg? $bg: '')};
  border-radius: ${({$radius}) => ($radius? $radius: '')};
`;

export default GlobalStyle;
