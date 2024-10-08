import React from "react";
import ReactDOM from "react-dom";

import ErrorBoundary from "../components/ErrorBoundary/index";
import GitHubInfo from "../components/GitHubInfo";
import Theme from "../components/Theme";
import * as S from "../GlobalStyles";
import GeneralLayout from "./GeneralLauout";

function Settings() {
  return (
    <GeneralLayout>
      <S.SettingsStyle>
        <Theme />
        <GitHubInfo />
      </S.SettingsStyle>
    </GeneralLayout>
  );
}

export default Settings;
