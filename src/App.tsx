import React from "react";
import ReactDOM from "react-dom";
import * as S from "./GlobalStyles";
import HeaderToDo from "./components/HeaderToDo";
import FormToDo from "./components/FormToDo";
import TaskList from "./components/TaskList";

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
