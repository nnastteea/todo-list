import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import MenuBurger from "@assets/menu.svg";

import * as S from "./style";
import { useIsMobile } from "./useIsMobile";

function HeaderToDo() {
  const { isMobile } = useIsMobile();
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
              <S.StyledLink to="/">
                <div>Home</div>
              </S.StyledLink>
              <S.StyledLink to="/settings">
                <div>Settings</div>
              </S.StyledLink>
            </S.DropDownMenu>
          )}
        </>
      ) : (
        <S.NavContainer>
          <S.MenuItem to="/">Home</S.MenuItem>

          <S.MenuItem to="/settings">Settings</S.MenuItem>
        </S.NavContainer>
      )}
    </S.HeaderContainer>
  );
}

export default HeaderToDo;
