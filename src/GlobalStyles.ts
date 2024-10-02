import { createGlobalStyle, styled } from "styled-components";

import { themes } from "./theme";

const PADDING_V1 = 60;
const PADDING_V2 = 40;
const PADDING_H1 = 130;
const PADDING_H2 = 70;
const PADDING_H3 = 20;

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
    background: ${({ theme }) => theme.colors.opacitygrey};
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
  padding: ${PADDING_V1}px ${PADDING_H1}px;

  @media (max-width: 593px) {
    display: flex;
    flex-direction: column;
    padding: ${PADDING_V2}px ${PADDING_H2}px;
  }

  @media (max-width: 435px) {
    padding: ${PADDING_V2}px ${PADDING_H3}px;
  }
`;
