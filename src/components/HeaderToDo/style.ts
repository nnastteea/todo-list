import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #3e50b5;
  width: 100%;
  height: 90px;
  color: white;
  font-size: 28px;
  position: sticky;
  top: 0;

  @media (max-width: 768px) {
    font-size: 26px;
  }

  @media (max-width: 600px) {
    font-size: 24px;
  }

  @media (max-width: 500px) {
    font-size: 22px;
  }
`;

export const Title = styled.div`
  flex-grow: 1;
  padding-left: 25px;

  @media (max-width: 500px) {
    padding-left: 20px;
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  gap: 75px;
  padding-right: 25px;

  @media (max-width: 768px) {
    gap: 50px;
  }

  @media (max-width: 600px) {
    gap: 20px;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

export const MenuIcon = styled.div`
  padding-right: 20px;
  cursor: pointer;

  img {
    width: 40px;
    height: 40px;
  }

  @media (min-width: 501px) {
    display: none;
  }
`;

export const DropDownMenu = styled.div`
position: absolute;
  top: 90px;
  right: 0;
  background-color: #3e50a5;
  display: flex;
  flex-direction: column;

  div {
    color: white;
    cursor: pointer;
    font-size: 20px;
     padding: 20px 50px;
    transition: background-color 0.5s;
  }

  div:hover{
  background-color: #3e50b5;
  }

  &:last-child {
  border-bottom-left-radius: 10px;
  }

  div:last-child:hover {
   border-bottom-left-radius: 10px;
`;

export const MenuItem = styled.nav`
  cursor: pointer;
  transition: 0.5s ease;

  &:hover {
    transform: scale(1.05);
  }
`;
