import React, { ReactNode } from "react";

import HeaderToDo from "../components/HeaderToDo";
import * as S from "../GlobalStyles";

interface GeneralLayoutProps {
  children: ReactNode;
}

function GeneralLayout({ children }: GeneralLayoutProps) {
  return (
    <>
      <S.GlobalStyle />
      <HeaderToDo />
      {children}
    </>
  );
}

export default GeneralLayout;
