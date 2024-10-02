import styled from "styled-components";

import { themes } from "./../../theme";

// const { light } = themes;

export const LabelFormAdd = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.extraSmall3}px;
  padding-bottom: ${({ theme }) => theme.sizes.xs7}px;
  color: ${({ theme }) => theme.colors.violetB};

  @media (max-width: 440px) {
    font-size: ${({ theme }) => theme.fontSizes.extraSmall2}px;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: ${({ theme }) => theme.sizes.xs5}px;
`;

export const FormAdd = styled.form`
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
  }

  @media (max-width: 440px) {
    padding-top: 0;
  }
`;

export const InputTask = styled.input`
  background: ${({ theme }) => theme.colors.white};
  width: ${({ theme }) => theme.sizes.xl11}px;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.violetB};
  font-size: ${({ theme }) => theme.fontSizes.medium}px;
  outline: none;

  @media (max-width: 768px) {
    width: ${({ theme }) => theme.sizes.xl7}px;
  }
`;

export const ButtonAddTask = styled.button`
  background: ${({ theme }) => theme.colors.violetB};
  color: ${({ theme }) => theme.colors.white};
  padding: 15px 30px;
  margin-top: ${({ theme }) => theme.sizes.xs7}px;
  border-radius: ${({ theme }) => theme.sizes.xs7}px;
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.extraSmall3}px;
  cursor: pointer;
  transition: 0.5s ease;

  &:hover {
    transform: scale(1.05);
    background: ${({ theme }) => theme.colors.violetA};
  }

  @media (max-width: 600px) {
    margin-top: ${({ theme }) => theme.sizes.xs}px;
    padding: 15px 60px;
  }

  @media (max-width: 440px) {
    padding: 15px 140px;
  }
`;
