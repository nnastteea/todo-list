import styled from "styled-components";

const backgroundErrorPage = "#FBFAFF";
const heightImg1 = 70;
const heightImg2 = 50;
const heightImg3 = 30;
const fontSize1 = 20;
const fontSize2 = 18;

export const ContainerError = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${backgroundErrorPage};
`;

export const ErrorIcon = styled.img`
  height: ${heightImg1}vh;

  @media (max-width: 768px) {
    height: ${heightImg2}vh;
  }
  @media (max-width: 550px) {
    height: ${heightImg3}vh;
  }
`;

export const TextError = styled.p`
  font-size: ${fontSize1}px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: ${fontSize2}px;
  }
`;
