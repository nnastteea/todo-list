import { themes } from "@theme/theme";
import styled from "styled-components";

const PADDING_V = 15;
const PADDING_H = 220;

export const LabelTheme = styled.p`
  color: ${({ theme }) => theme.colors.grey3};
  font-size: ${({ theme }) => theme.fontSizes.extraSmall2}px;
`;

export const ThemeButton = styled.button`
  background: ${({ theme }) => theme.colors.grey4};
  padding: ${PADDING_V}px ${PADDING_H}px;
  color: ${({ theme }) => theme.colors.black};
  border-radius: ${({ theme }) => theme.sizes.xs8}px;
  border: 2px solid ${({ theme }) => theme.colors.grey5};
  font-size: ${({ theme }) => theme.fontSizes.extraSmall3}px;
  cursor: pointer;
  text-align: left;
  padding-left: ${({ theme }) => theme.sizes.xs4}px;
  transition: 0.5s ease;

  &:hover {
    transform: scale(1.02);
    background: ${({ theme }) => theme.colors.grey6};
  }
`;
