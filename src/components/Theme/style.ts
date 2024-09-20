import styled from "styled-components";

export const LabelTheme = styled.p`
  color: #646464;
  font-size: 18px;
`;

export const ThemeButton = styled.button`
  background: #fffafa;
  padding: 15px 220px;
  border-radius: 8px;
  border: 2px solid #a1a1a1;
  font-size: 16px;
  cursor: pointer;
  text-align: left;
  padding-left: 20px;
  transition: 0.5s ease;

  &:hover {
    transform: scale(1.02);
    background: #ebebeb;
  }
`;
