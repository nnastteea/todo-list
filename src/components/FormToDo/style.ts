import styled from "styled-components";

import { fontSizes, sizes } from "./../../theme";

export const LabelFormAdd = styled.label`
  font-size: ${fontSizes.extraSmall3}px;
  padding-bottom: ${sizes.xs7}px;
  color: ${({ theme }) => theme.colors.violetB};

  @media (max-width: 440px) {
    font-size: ${fontSizes.extraSmall2}px;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: ${sizes.xs5}px;
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
  width: ${sizes.xl11}px;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.violetB};
  font-size: ${fontSizes.medium}px;
  outline: none;

  @media (max-width: 768px) {
    width: ${sizes.xl7}px;
  }
`;

export const ButtonAddTask = styled.button`
  background: ${({ theme }) => theme.colors.violetB};
  color: ${({ theme }) => theme.colors.white};
  padding: 15px 30px;
  margin-top: ${sizes.xs7}px;
  border-radius: ${sizes.xs7}px;
  border: none;
  font-size: ${fontSizes.extraSmall3}px;
  cursor: pointer;
  transition: 0.5s ease;

  &:hover {
    transform: scale(1.05);
    background: ${({ theme }) => theme.colors.violetA};
  }

  @media (max-width: 600px) {
    margin-top: ${sizes.xs}px;
    padding: 15px 60px;
  }

  @media (max-width: 440px) {
    padding: 15px 140px;
  }
`;
