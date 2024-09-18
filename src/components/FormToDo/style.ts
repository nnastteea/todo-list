import styled from "styled-components";

export const LabelFormAdd = styled.label`
  font-size: 16px;
  padding-bottom: 10px;
  color: #3e50b5;

  @media (max-width: 440px) {
    font-size: 18px;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 16px;
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
  width: 400px;
  border: none;
  border-bottom: 2px solid #3e50b5;
  font-size: 24px;
  outline: none;

  @media (max-width: 768px) {
    width: 350px;
  }
`;

export const ButtonAddTask = styled.button`
  background: #3e50b5;
  color: white;
  padding: 15px 30px;
  margin-top: 10px;
  border-radius: 10px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  transition: 0.5s ease;

  &:hover {
    transform: scale(1.05);
    background: #3e50a5;
  }

  @media (max-width: 600px) {
    margin-top: 40px;
    padding: 15px 60px;
  }

  @media (max-width: 440px) {
    margin-top: 40px;
    padding: 15px 140px;
  }
`;
