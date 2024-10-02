import styled from "styled-components";

import { fontSizes, sizes } from "./../../theme";

export const LabelTheme = styled.p`
  color: ${({ theme }) => theme.colors.grey3};
  font-size: ${fontSizes.extraSmall2}px;
`;

export const ThemeButton = styled.button`
  background: ${({ theme }) => theme.colors.grey4};
  padding: 15px 220px;
  border-radius: ${sizes.xs8}px;
  border: 2px solid ${({ theme }) => theme.colors.grey5};
  font-size: ${fontSizes.extraSmall3}px;
  cursor: pointer;
  text-align: left;
  padding-left: ${sizes.xs4}px;
  transition: 0.5s ease;

  &:hover {
    transform: scale(1.02);
    background: ${({ theme }) => theme.colors.grey6};
  }
`;
