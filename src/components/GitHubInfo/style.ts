import styled from "styled-components";

export const FormGitHubSearch = styled.form`
  padding-top: 20px;
  width: 330px;

  @media (max-width: 592px) {
    width: 100%;
  }
`;

export const LabelSearch = styled.p`
  font-size: 18px;
`;

export const InputSearch = styled.input`
  width: 245px;
  border: none;
  border-bottom: 2px solid #646464;
  font-size: 16px;
  outline: none;
  padding: 10px 20px;

  @media (max-width: 592px) {
    width: 80%;
  }
`;

export const SearchButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  padding-left: 15px;
  transition: 0.5s ease;
  width: auto;

  & > img {
    width: 24px;
    height: auto;
    display: block;
    padding: 0;
    margin: 0;
    transition: 0.5s ease;
  }

  &:hover > img {
    transform: scale(1.05); /* Увеличиваем изображение */
    filter: brightness(0.5) invert(0.5); /* Изменяем цвет (можно настроить) */
  }

  @media (max-width: 592px) {
  }
`;

export const InputSearchContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const UserCard = styled.div`
  margin-top: 20px;
  padding: 10px;
  display: flex;
  flex-direction: column;

  img {
    margin-right: 10px;
    width: 200px;
    height: 200px;
  }

  div {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;
