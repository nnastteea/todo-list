import React, { useEffect, useState } from "react";

import { FormToDoProps } from "./interface";
import * as S from "./style";

function FormToDo({ addTask, isEditTask, editTask }: FormToDoProps) {
  const [name, setName] = useState("");

  useEffect(() => {
    if (isEditTask) {
      setName(isEditTask.name);
    }
  }, [isEditTask]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (name.trim()) {
      if (isEditTask) {
        editTask({ ...isEditTask, name });
      } else {
        addTask(name);
      }
      setName("");
    }
  };

  return (
    <S.FormAdd onSubmit={handleSubmit}>
      <S.FormGroup>
        <S.LabelFormAdd htmlFor="add-task">Add a new task</S.LabelFormAdd>
        <S.InputTask
          type="text"
          id="add-task"
          value={name}
          onChange={handleChange}
        />
      </S.FormGroup>
      <S.ButtonAddTask type="submit">
        {isEditTask ? "Edit" : "Add ToDo"}
      </S.ButtonAddTask>
    </S.FormAdd>
  );
}

export default FormToDo;
