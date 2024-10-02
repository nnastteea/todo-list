import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { themes } from "./../../theme";

const PADDING_V = 20;
const PADDING_H = 50;

export const HeaderContainer = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.violetB};
  width: 100%;
  height: ${({ theme }) => theme.sizes.xl2}px;
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.extraLarge2}px;
  position: sticky;
  top: 0;

  @media (max-width: ${({ theme }) => theme.sizes.xl15}) {
    font-size: ${({ theme }) => theme.fontSizes.extraLarge}px;
  }

  @media (max-width: ${({ theme }) => theme.sizes.xl14}px) {
    font-size: ${({ theme }) => theme.fontSizes.medium}px;
  }

  @media (max-width: ${({ theme }) => theme.sizes.xl12}px) {
    font-size: ${({ theme }) => theme.fontSizes.small}px;
  }
`;

export const Title = styled.div`
  flex-grow: 1;
  padding-left: ${({ theme }) => theme.sizes.xs2}px;

  @media (max-width: ${({ theme }) => theme.sizes.xl12}px) {
    padding-left: ${({ theme }) => theme.sizes.xs4}px;
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.sizes.l}px;
  padding-right: ${({ theme }) => theme.sizes.xs2}px;

  @media (max-width: ${({ theme }) => theme.sizes.xl15}px) {
    gap: ${({ theme }) => theme.sizes.s}px;
  }

  @media (max-width: ${({ theme }) => theme.sizes.xl14}px) {
    gap: ${({ theme }) => theme.sizes.xs4}px;
  }

  @media (max-width: ${({ theme }) => theme.sizes.xl12}px) {
    display: none;
  }
`;

export const MenuIcon = styled.div`
  padding-right: ${({ theme }) => theme.sizes.xs4}px;
  cursor: pointer;

  img {
    width: ${({ theme }) => theme.sizes.xs}px;
    height: ${({ theme }) => theme.sizes.xs}px;
  }

  @media (min-width: ${({ theme }) => theme.sizes.xl12}px) {
    display: none;
  }
`;

export const DropDownMenu = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.sizes.xl2}px;
  right: 0;
  background-color: ${({ theme }) => theme.colors.violetA};
  display: flex;
  flex-direction: column;

  &:last-child {
    border-bottom-left-radius: ${({ theme }) => theme.sizes.xs7}px;
  }
`;

export const MenuItem = styled(NavLink)`
  cursor: pointer;
  text-decoration: none;
  color: white;
  cursor: pointer;
  transition: 0.5s ease;

  &:hover {
    transform: scale(1.05);
  }
  &.active {
    transform: scale(1.07);
    color: ${({ theme }) => theme.colors.grey1};
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.extraSmall}px;
  padding: ${PADDING_V}px ${PADDING_H}px;
  transition: background-color 0.5s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.violetB};
  }

  &:last-child:hover {
    border-bottom-left-radius: ${({ theme }) => theme.sizes.xs7}px;
  }

  &.active {
    color: ${({ theme }) => theme.colors.grey1};
  }
`;
