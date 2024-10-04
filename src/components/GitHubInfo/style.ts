import { themes } from "@theme/theme";
import styled from "styled-components";

const PADDING_V = 10;
const PADDING_H = 20;

export const FormGitHubSearch = styled.form`
  padding-top: ${({ theme }) => theme.sizes.xs4}px;
  width: ${({ theme }) => theme.sizes.xl6}px;

  @media (max-width: 592px) {
    width: 100%;
  }
`;

export const LabelSearch = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.extraSmall2}px;
`;

export const InputSearch = styled.input`
  width: ${({ theme }) => theme.sizes.xl5}px;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey3};
  font-size: ${({ theme }) => theme.fontSizes.extraSmall3}px;
  outline: none;
  padding: ${PADDING_V}px ${PADDING_H}px;
  background: ${({ theme }) => theme.colors.white};

  @media (max-width: 592px) {
    width: 80%;
  }
`;

export const SearchButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  padding-left: ${({ theme }) => theme.sizes.xs6}px;
  transition: 0.5s ease;
  width: auto;

  & > img {
    width: ${({ theme }) => theme.sizes.xs3}px;
    height: auto;
    display: block;
    padding: 0;
    margin: 0;
    transition: 0.5s ease;
  }

  &:hover > img {
    transform: scale(1.05);
    filter: brightness(0.5) invert(0.5);
  }
`;

export const InputSearchContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const UserCard = styled.div`
  margin-top: ${({ theme }) => theme.sizes.xs4}px;
  padding: ${({ theme }) => theme.sizes.xs7}px;
  display: flex;
  flex-direction: column;

  img {
    margin-right: ${({ theme }) => theme.sizes.xs7}px;
    width: ${({ theme }) => theme.sizes.xl4}px;
    height: ${({ theme }) => theme.sizes.xl4}px;
  }

  div {
    font-size: ${({ theme }) => theme.fontSizes.extraSmall2}px;
    margin-bottom: ${({ theme }) => theme.sizes.xs7}px;
  }
`;
