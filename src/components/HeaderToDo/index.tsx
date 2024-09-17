import MenuBurger from "@assets/menu.svg";
import React, { useEffect, useState } from "react";

import * as S from "./style";
import { useIsMobile } from "./useIseMobile";

function HeaderToDo() {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <S.HeaderContainer>
      <S.Title>Modsen ToDo List</S.Title>
      {isMobile ? (
        <>
          <S.MenuIcon onClick={openMenu}>
            <img src={MenuBurger} alt="menu" />
          </S.MenuIcon>
          {isMenuOpen && (
            <S.DropDownMenu>
              <S.MenuItem>Home</S.MenuItem>
              <S.MenuItem>Settings</S.MenuItem>
            </S.DropDownMenu>
          )}
        </>
      ) : (
        <S.NavContainer>
          <S.MenuItem>Home</S.MenuItem>
          <S.MenuItem>Settings</S.MenuItem>
        </S.NavContainer>
      )}
    </S.HeaderContainer>
  );
}

export default HeaderToDo;
