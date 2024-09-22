import React from "react";
import ReactDOM from "react-dom";

import GeneralLayout from "./GeneralLauout";
import FormToDo from "../components/FormToDo";
import TaskList from "../components/TaskList";
import * as S from "../GlobalStyles";

function Home() {
  return (
    <GeneralLayout>
      <S.MainStyle>
        <FormToDo />
        <TaskList />
      </S.MainStyle>
    </GeneralLayout>
  );
}

export default Home;
