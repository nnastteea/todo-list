import React from "react";
import ReactDOM from "react-dom";

import FormToDo from "./components/FormToDo";
import HeaderToDo from "./components/HeaderToDo";
import TaskList from "./components/TaskList";
import * as S from "./GlobalStyles";

function App() {
  return (
    <>
      <S.GlobalStyle />
      <HeaderToDo />
      <S.MainStyle>
        <FormToDo />
        <TaskList />
      </S.MainStyle>
    </>
  );
}

export default App;
