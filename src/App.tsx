import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyle, MainStyle } from "./GlobalStyles";
import HeaderToDo from "./components/HeaderToDo";
import FormToDo from "./components/FormToDo";
import TaskList from "./components/TaskList";

function App() {
  return (
    <>
      <GlobalStyle />
      <HeaderToDo />
      <MainStyle>
        <FormToDo />
        <TaskList />
      </MainStyle>
    </>
  );
}

export default App;
