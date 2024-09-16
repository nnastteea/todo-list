import React from "react";
import { useState } from "react";
import {
  InputTask,
  ButtonAddTask,
  LabelFormAdd,
  FormAdd,
  FormGroup,
} from "./style";

function FormToDo() {
  const [name, setName] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  return (
    <FormAdd>
      <FormGroup>
        <LabelFormAdd htmlFor="add-task">Add a new task</LabelFormAdd>
        <InputTask
          type="text"
          id="add-task"
          value={name}
          onChange={handleChange}
        />
      </FormGroup>
      <ButtonAddTask type="submit">Add ToDo</ButtonAddTask>
    </FormAdd>
  );
}

export default FormToDo;
