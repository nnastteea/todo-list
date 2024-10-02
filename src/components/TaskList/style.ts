import styled from "styled-components";

import { fontSizes, sizes } from "./../../theme";

export const HeaderTask = styled.h1`
  font-size: ${fontSizes.extraLarge3}px;
  padding-top: ${sizes.s}px;

  @media (max-width: 768px) {
    padding-top: ${sizes.xs}px;
  }
  @media (max-width: 600px) {
    padding-top: ${sizes.xs2}px;
  }
  @media (max-width: 500px) {
    font-size: ${fontSizes.large}px;
    padding-top: ${sizes.xs6}px;
  }
`;

export const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${sizes.xs6}px;
  padding-bottom: ${sizes.xs7}px;
  width: ${sizes.xl13}px;

  & > :first-of-type:not(p) {
    border-top: 2px solid ${({ theme }) => theme.colors.grey2};
  }

  @media (max-width: 768px) {
    width: ${sizes.xl12}px;
  }

  @media (max-width: 600px) {
    width: ${sizes.xl9}px;
  }

  @media (max-width: 600px) {
    width: ${sizes.xl8}px;
  }
`;

export const TaskItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey2};
  width: ${sizes.xl13}px;

  @media (max-width: 768px) {
    width: ${sizes.xl12}px;
  }

  @media (max-width: 600px) {
    width: ${sizes.xl9}px;
  }

  @media (max-width: 600px) {
    width: ${sizes.xl8}px;
  }
`;

export const TaskActions = styled.div`
  display: flex;
  gap: ${sizes.xs7}px;

  img {
    cursor: pointer;
    width: ${sizes.xs4}px;
    height: ${sizes.xs4}px;
  }
`;

export const TaskName = styled.span<{ $completed: boolean }>`
  flex-grow: 1;
  margin-left: ${sizes.xs7}px;
  text-decoration: ${({ $completed }) =>
    $completed ? "line-through" : "none"};
`;

export const Checkbox = styled.input`
  cursor: pointer;
  width: ${sizes.xs4}px;
  height: ${sizes.xs4}px;
`;

export const DeleteSelectedButton = styled.button`
  background: ${({ theme }) => theme.colors.red};
  color: white;
  padding: 15px 30px;
  margin-top: ${sizes.xs7}px;
  border-radius: ${sizes.xs7}px;
  border: none;
  font-size: ${fontSizes.extraSmall3}px;
  cursor: pointer;
  transition: 0.5s ease;
  margin-right: ${sizes.xl10}px;
  margin-top: ${sizes.xs4}px;
  margin-bottom: ${sizes.m}px;

  &:hover {
    transform: scale(1.05);
    background: ${({ theme }) => theme.colors.redHover};
  }

  @media (max-width: 768px) {
    margin-right: ${sizes.xl6}px;
  }

  @media (max-width: 600px) {
    margin-right: ${sizes.xl4}px;
    padding: 15px 25px;
  }

  @media (max-width: 440px) {
    margin-right: ${sizes.xs10}px;
    padding: 15px 120px;
  }
`;
