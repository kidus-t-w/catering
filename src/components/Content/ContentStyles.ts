import styled from "styled-components";

export const Image = styled.img`
  width: 60%;
  height: 100%;
`;

export const Contents = styled.div<{$layout?: string}>`
  width: 60%;
  height: 70%;
  padding: 2rem;
  background: white;
  position: absolute;
  right: ${({$layout}) => ($layout? $layout: '')} ;
  top: 50%;
  transform: translateY(-50%);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 16px;
`;

export const ContentContainer = styled.section<{$layout?: string}>`
  display: flex;
  flex-direction: ${({ $layout }) => ($layout ? $layout : "")};
  position: relative;
  align-items: center;
  height: 50vh; /* Ensure the section takes the full viewport height */
  margin-top: 2rem;
  margin-bottom: 2rem;
`;
