import React from "react";
import ReactDOM from "react-dom";

import GitHubInfo from "../components/GitHubInfo";
import HeaderToDo from "../components/HeaderToDo";
import Theme from "../components/Theme";
import * as S from "../GlobalStyles";

function Settings() {
  return (
    <>
      <S.GlobalStyle />
      <HeaderToDo />
      <S.SettingsStyle>
        <Theme />
        <GitHubInfo />
      </S.SettingsStyle>
    </>
  );
}

export default Settings;
