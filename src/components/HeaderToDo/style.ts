import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { fontSizes, sizes } from "./../../theme";

export const HeaderContainer = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.violetB};
  width: 100%;
  height: ${sizes.xl2}px;
  color: white;
  font-size: ${fontSizes.extraLarge2}px;
  position: sticky;
  top: 0;

  @media (max-width: 768px) {
    font-size: ${fontSizes.extraLarge}px;
  }

  @media (max-width: 600px) {
    font-size: ${fontSizes.medium}px;
  }

  @media (max-width: 500px) {
    font-size: ${fontSizes.small}px;
  }
`;

export const Title = styled.div`
  flex-grow: 1;
  padding-left: ${sizes.xs2}px;

  @media (max-width: 500px) {
    padding-left: ${sizes.xs4}px;
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  gap: ${sizes.l}px;
  padding-right: ${sizes.xs2}px;

  @media (max-width: 768px) {
    gap: ${sizes.s}px;
  }

  @media (max-width: 600px) {
    gap: ${sizes.xs4}px;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

export const MenuIcon = styled.div`
  padding-right: ${sizes.xs4}px;
  cursor: pointer;

  img {
    width: ${sizes.xs}px;
    height: ${sizes.xs}px;
  }

  @media (min-width: 501px) {
    display: none;
  }
`;

export const DropDownMenu = styled.div`
  position: absolute;
  top: ${sizes.xl2}px;
  right: 0;
  background-color: ${({ theme }) => theme.colors.violetA};
  display: flex;
  flex-direction: column;

  &:last-child {
    border-bottom-left-radius: ${sizes.xs7}px;
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
  font-size: ${fontSizes.extraSmall}px;
  padding: 20px 50px;
  transition: background-color 0.5s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.violetB};
  }

  &:last-child:hover {
    border-bottom-left-radius: ${sizes.xs7}px;
  }

  &.active {
    color: ${({ theme }) => theme.colors.grey1};
  }
`;
