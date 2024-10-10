import React, { useState } from "react";
import MenuBurger from "@assets/menu.svg";
import routes from "@routes/route";

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
          <S.MenuImgContainer onClick={openMenu}>
            <img src={MenuBurger} alt="menu" />
          </S.MenuImgContainer>
          {isMenuOpen && (
            <S.DropDownMenu>
              <S.StyledLink to={routes.HOME}>
                <p>Home</p>
              </S.StyledLink>
              <S.StyledLink to={routes.SETTINGS}>
                <p>Settings</p>
              </S.StyledLink>
            </S.DropDownMenu>
          )}
        </>
      ) : (
        <S.NavContainer>
          <S.MenuItem to={routes.HOME}>Home</S.MenuItem>

          <S.MenuItem to={routes.SETTINGS}>Settings</S.MenuItem>
        </S.NavContainer>
      )}
    </S.HeaderContainer>
  );
}

export default HeaderToDo;
