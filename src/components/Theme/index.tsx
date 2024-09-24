import React, { useState } from "react";

import * as S from "./style";

function Theme() {
  return (
    <>
      <S.LabelTheme>Switch Theme</S.LabelTheme>
      <S.ThemeButton>Light Theme</S.ThemeButton>
    </>
  );
}

export default Theme;
