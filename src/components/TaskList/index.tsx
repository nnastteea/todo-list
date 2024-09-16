import React from "react";
import { useState } from "react";
import {
  HeaderTask,
  TaskContainer,
  TaskItem,
  Checkbox,
  TaskName,
  TaskActions,
  DeleteSelectedButton,
} from "./style";
import Edit from "../../assets/edit.svg";
import Delete from "../../assets/delete.svg";

const tasksData = [
  { id: 1, name: "Task 1", completed: false },
  { id: 2, name: "Task 2", completed: false },
  { id: 3, name: "Task 3", completed: false },
  { id: 4, name: "Task 4", completed: false },
  { id: 5, name: "Task 5", completed: false },
  { id: 6, name: "Task 6", completed: false },
];

function TaskList() {
  const [tasks, setTasks] = useState(tasksData);

  const handleCheckboxChange = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const handleEdit = (id: number) => {
    console.log("let`s edit your task!", { id });
  };

  const handleDelete = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleDeleteSelected = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  return (
    <>
      <HeaderTask>Task List</HeaderTask>
      <TaskContainer>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskItem key={task.id}>
              <Checkbox
                type="checkbox"
                id={`checkbox-${task.id}`}
                name={`task-${task.name}`}
                checked={task.completed}
                onChange={() => handleCheckboxChange(task.id)}
              />
              <TaskName $completed={task.completed}>{task.name}</TaskName>
              <TaskActions>
                <img
                  src={Edit}
                  alt="edit"
                  onClick={() => handleEdit(task.id)}
                />
                <img
                  src={Delete}
                  alt="delete"
                  onClick={() => handleDelete(task.id)}
                />
              </TaskActions>
            </TaskItem>
          ))
        ) : (
          <p>There is no tasks</p>
        )}
      </TaskContainer>
      {tasks.length > 0 && (
        <DeleteSelectedButton onClick={handleDeleteSelected}>
          Delete Selected
        </DeleteSelectedButton>
      )}
    </>
  );
}

export default TaskList;
