import React, { useState } from "react";
import { themes } from "@theme/theme";

import { useTheme } from "../../ThemeProvider";
import * as S from "./style";

function Theme() {
  const { currentTheme, changeTheme } = useTheme();

  return (
    <>
      <S.LabelTheme>Switch Theme</S.LabelTheme>
      <S.ThemeButton onClick={changeTheme}>
        {currentTheme === themes.light ? "Light theme" : "Dark theme"}
      </S.ThemeButton>
    </>
  );
}

export default Theme;
