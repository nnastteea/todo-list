import React from "react";
import { useState, useEffect } from "react";
import {
  HeaderContainer,
  Title,
  NavContainer,
  MenuIcon,
  DropDownMenu,
  MenuItem,
} from "./style";
import MenuBurger from "../../assets/menu.svg";

function HeaderToDo() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth <= 500);
    };
    window.addEventListener("resize", checkSize);
    checkSize();

    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      <Title>Modsen ToDo List</Title>
      {isMobile ? (
        <>
          <MenuIcon onClick={openMenu}>
            <img src={MenuBurger} alt="menu" />
          </MenuIcon>
          {isMenuOpen && (
            <DropDownMenu>
              <MenuItem>Home</MenuItem>
              <MenuItem>Settings</MenuItem>
            </DropDownMenu>
          )}
        </>
      ) : (
        <NavContainer>
          <MenuItem>Home</MenuItem>
          <MenuItem>Settings</MenuItem>
        </NavContainer>
      )}
    </HeaderContainer>
  );
}

export default HeaderToDo;
