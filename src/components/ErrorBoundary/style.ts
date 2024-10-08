import styled from "styled-components";

const backgroundErrorPage = "#FBFAFF";
const heightImg = 85;
const fontSize = 18;

export const ContainerError = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${backgroundErrorPage};
  margin: 0;
`;

export const ErrorIcon = styled.img`
  height: ${heightImg}vh;
`;

export const TextError = styled.p`
  font-size: ${fontSize}px;
`;
