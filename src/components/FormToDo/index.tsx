import React, { useState } from "react";

import * as S from "./style";

function FormToDo() {
  const [name, setName] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  return (
    <S.FormAdd>
      <S.FormGroup>
        <S.LabelFormAdd htmlFor="add-task">Add a new task</S.LabelFormAdd>
        <S.InputTask
          type="text"
          id="add-task"
          value={name}
          onChange={handleChange}
        />
      </S.FormGroup>
      <S.ButtonAddTask type="submit">Add ToDo</S.ButtonAddTask>
    </S.FormAdd>
  );
}

export default FormToDo;
