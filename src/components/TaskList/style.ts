import styled from "styled-components";

export const HeaderTask = styled.h1`
  font-size: 30px;
  padding-top: 50px;

  @media (max-width: 768px) {
    padding-top: 40px;
  }
  @media (max-width: 600px) {
    padding-top: 25px;
  }
  @media (max-width: 500px) {
    font-size: 25px;
    padding-top: 15px;
  }
`;

export const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-bottom: 10px;
  width: 550px;

  & > :first-of-type:not(p) {
    border-top: 2px solid #979797;
  }

  @media (max-width: 768px) {
    width: 500px;
  }

  @media (max-width: 600px) {
    width: 370px;
  }

  @media (max-width: 600px) {
    width: 360px;
  }
`;

export const TaskItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
  border-bottom: 2px solid #979797;
  width: 550px;

  @media (max-width: 768px) {
    width: 500px;
  }

  @media (max-width: 600px) {
    width: 370px;
  }

  @media (max-width: 600px) {
    width: 360px;
  }
`;

export const TaskActions = styled.div`
  display: flex;
  gap: 10px;

  img {
    cursor: pointer;
    width: 20px;
    height: 20px;
  }
`;

export const TaskName = styled.span<{ $completed: boolean }>`
  flex-grow: 1;
  margin-left: 10px;
  text-decoration: ${({ $completed }) =>
    $completed ? "line-through" : "none"};
`;

export const Checkbox = styled.input`
  cursor: pointer;
  width: 20px;
  height: 20px;
`;

export const DeleteSelectedButton = styled.button`
  background: #d00038;
  color: white;
  padding: 15px 30px;
  margin-top: 10px;
  border-radius: 10px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  transition: 0.5s ease;
  margin-right: 380px;
  margin-top: 20px;
  margin-bottom: 60px;

  &:hover {
    transform: scale(1.05);
    background: #c30437;
  }

  @media (max-width: 768px) {
    margin-right: 330px;
  }

  @media (max-width: 600px) {
    margin-right: 200px;
    padding: 15px 25px;
  }

  @media (max-width: 440px) {
    margin-right: 0px;
    padding: 15px 120px;
  }
`;
