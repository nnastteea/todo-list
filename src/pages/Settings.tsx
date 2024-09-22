import React from "react";
import ReactDOM from "react-dom";

import GeneralLayout from "./GeneralLauout";
import GitHubInfo from "../components/GitHubInfo";
import Theme from "../components/Theme";
import * as S from "../GlobalStyles";

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
