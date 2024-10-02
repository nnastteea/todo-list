import styled from "styled-components";

import { fontSizes, sizes } from "./../../theme";

export const FormGitHubSearch = styled.form`
  padding-top: ${sizes.xs4}px;
  width: ${sizes.xl6}px;

  @media (max-width: 592px) {
    width: 100%;
  }
`;

export const LabelSearch = styled.p`
  font-size: ${fontSizes.extraSmall2}px;
`;

export const InputSearch = styled.input`
  width: ${sizes.xl5}px;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey3};
  font-size: ${fontSizes.extraSmall3}px;
  outline: none;
  padding: 10px 20px;
  background: ${({ theme }) => theme.colors.white};

  @media (max-width: 592px) {
    width: 80%;
  }
`;

export const SearchButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  padding-left: ${sizes.xs6}px;
  transition: 0.5s ease;
  width: auto;

  & > img {
    width: ${sizes.xs3}px;
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
  margin-top: ${sizes.xs4}px;
  padding: ${sizes.xs7}px;
  display: flex;
  flex-direction: column;

  img {
    margin-right: ${sizes.xs7}px;
    width: ${sizes.xl4}px;
    height: ${sizes.xl4}px;
  }

  div {
    font-size: ${fontSizes.extraSmall2}px;
    margin-bottom: ${sizes.xs7}px;
  }
`;
