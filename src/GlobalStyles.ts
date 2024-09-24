import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  body {
    margin: 0; 
    padding: 0; 
    font-family: "Jost", sans-serif;
  }
    
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
  }

  &::-webkit-scrollbar-thumb {
    background: #3e50b5; 
    border-radius: 3px; 
  }
`;
export const MainStyle = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
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
