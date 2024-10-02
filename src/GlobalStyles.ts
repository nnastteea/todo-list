import { createGlobalStyle, styled } from "styled-components";

import { themes } from "./theme";

// const { light } = themes;

export const GlobalStyle = createGlobalStyle`

  body {
    background: ${({ theme }) => theme.colors.white};
    margin: 0; 
    padding: 0; 
    font-family: "Jost", sans-serif;
  }
    
  &::-webkit-scrollbar {
    width: ${({ theme }) => theme.sizes.xs9}px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.violetB}; 
    border-radius: ${({ theme }) => theme.sizes.xs9}px; 
  }
`;
export const MainStyle = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${({ theme }) => theme.sizes.m}px;
`;

export const SettingsStyle = styled.main`
  display: column;
  padding: 60px 130px;

  @media (max-width: 593px) {
    display: flex;
    flex-direction: column;
    padding: 40px 70px;
  }

  @media (max-width: 435px) {
    padding: 40px 20px;
  }
`;
