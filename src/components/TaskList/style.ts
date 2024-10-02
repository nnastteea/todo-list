import styled from "styled-components";

import { themes } from "./../../theme";

const PADDING_V = 15;
const PADDING_H1 = 0;
const PADDING_H2 = 30;
const PADDING_H3 = 25;
const PADDING_H4 = 120;

export const HeaderTask = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.extraLarge3}px;
  padding-top: ${({ theme }) => theme.sizes.s}px;

  @media (max-width: ${({ theme }) => theme.sizes.xl15}px) {
    padding-top: ${({ theme }) => theme.sizes.xs}px;
  }
  @media (max-width: ${({ theme }) => theme.sizes.xl14}px) {
    padding-top: ${({ theme }) => theme.sizes.xs2}px;
  }
  @media (max-width: ${({ theme }) => theme.sizes.xl12}px) {
    font-size: ${({ theme }) => theme.fontSizes.large}px;
    padding-top: ${({ theme }) => theme.sizes.xs6}px;
  }
`;

export const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.sizes.xs6}px;
  padding-bottom: ${({ theme }) => theme.sizes.xs7}px;
  width: ${({ theme }) => theme.sizes.xl13}px;

  & > :first-of-type:not(p) {
    border-top: 2px solid ${({ theme }) => theme.colors.grey2};
  }

  @media (max-width: ${({ theme }) => theme.sizes.xl15}px) {
    width: ${({ theme }) => theme.sizes.xl12}px;
  }

  @media (max-width: ${({ theme }) => theme.sizes.xl14}px) {
    width: ${({ theme }) => theme.sizes.xl9}px;
  }
`;

export const TaskItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${PADDING_V}px ${PADDING_H1};
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey2};
  width: ${({ theme }) => theme.sizes.xl13}px;

  @media (max-width: ${({ theme }) => theme.sizes.xl15}px) {
    width: ${({ theme }) => theme.sizes.xl12}px;
  }

  @media (max-width: ${({ theme }) => theme.sizes.xl14}px) {
    width: ${({ theme }) => theme.sizes.xl9}px;
  }
`;

export const TaskActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.sizes.xs7}px;

  img {
    cursor: pointer;
    width: ${({ theme }) => theme.sizes.xs4}px;
    height: ${({ theme }) => theme.sizes.xs4}px;
  }
`;

export const TaskName = styled.span<{ $completed: boolean }>`
  flex-grow: 1;
  margin-left: ${({ theme }) => theme.sizes.xs7}px;
  text-decoration: ${({ $completed }) =>
    $completed ? "line-through" : "none"};
`;

export const Checkbox = styled.input`
  cursor: pointer;
  width: ${({ theme }) => theme.sizes.xs4}px;
  height: ${({ theme }) => theme.sizes.xs4}px;
`;

export const DeleteSelectedButton = styled.button`
  background: ${({ theme }) => theme.colors.red};
  color: white;
  padding: ${PADDING_V}px ${PADDING_H2}px;
  margin-top: ${({ theme }) => theme.sizes.xs7}px;
  border-radius: ${({ theme }) => theme.sizes.xs7}px;
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.extraSmall3}px;
  cursor: pointer;
  transition: 0.5s ease;
  margin-right: ${({ theme }) => theme.sizes.xl10}px;
  margin-top: ${({ theme }) => theme.sizes.xs4}px;
  margin-bottom: ${({ theme }) => theme.sizes.m}px;

  &:hover {
    transform: scale(1.05);
    background: ${({ theme }) => theme.colors.redHover};
  }

  @media (max-width: ${({ theme }) => theme.sizes.xl15}px) {
    margin-right: ${({ theme }) => theme.sizes.xl6}px;
  }

  @media (max-width: ${({ theme }) => theme.sizes.xl14}px) {
    margin-right: ${({ theme }) => theme.sizes.xl4}px;
    padding: ${PADDING_V}px ${PADDING_H3}px;
  }

  @media (max-width: ${({ theme }) => theme.sizes.xl16}px) {
    margin-right: ${({ theme }) => theme.sizes.xs10}px;
    padding: ${PADDING_V}px ${PADDING_H4}px;
  }
`;
