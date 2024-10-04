import React, { useState } from "react";
import { ReactComponent as DeleteIcon } from "@assets/delete.svg";
import { ReactComponent as EditIcon } from "@assets/edit.svg";
import { Task } from "@interfaces/Task";

import * as S from "./style";
import { TaskListProps } from "./TaskListProps";

function TaskList({ tasks, setTasks, setIsEditTask }: TaskListProps) {
  const handleCheckboxChange = (id: number) => () => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const handleEdit = (task: Task) => () => {
    setIsEditTask(task);
  };

  const handleDelete = (id: number) => () => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleDeleteSelected = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.completed));
  };

  return (
    <>
      <S.HeaderTask>Task List</S.HeaderTask>
      <S.TaskContainer>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <S.TaskItem key={task.id}>
              <S.Checkbox
                type="checkbox"
                id={`checkbox-${task.id}`}
                name={`task-${task.name}`}
                checked={task.completed}
                onChange={handleCheckboxChange(task.id)}
              />
              <S.TaskName $completed={task.completed}>{task.name}</S.TaskName>
              <S.TaskActions>
                <EditIcon alt="edit" onClick={handleEdit(task)} />
                <DeleteIcon alt="delete" onClick={handleDelete(task.id)} />
              </S.TaskActions>
            </S.TaskItem>
          ))
        ) : (
          <S.InfoMessage>There is no tasks</S.InfoMessage>
        )}
      </S.TaskContainer>
      {tasks.length > 0 && (
        <S.DeleteSelectedButton onClick={handleDeleteSelected}>
          Delete Selected
        </S.DeleteSelectedButton>
      )}
    </>
  );
}

export default TaskList;
