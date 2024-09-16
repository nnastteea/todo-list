import React, {useState} from "react";
import * as S from "./style";
import Edit from '@assets/edit.svg';
import Delete from '@assets/delete.svg';
import {tasksData} from "./constants"

function TaskList() {
  const [tasks, setTasks] = useState(tasksData);

  const handleCheckboxChange = (id: number) =>()=> {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const handleEdit = (id: number) =>()=> {
    console.log("let`s edit your task!", { id });
  };

  const handleDelete = (id: number) =>()=> {
    setTasks(tasks.filter((task) => task.id !== id));

  };

  const handleDeleteSelected = () =>{
    setTasks(tasks.filter((task) => !task.completed));
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
                <img
                  src={Edit}
                  alt="edit"
                  onClick={handleEdit(task.id)}
                />
                <img
                  src={Delete}
                  alt="delete"
                  onClick={handleDelete(task.id)}
                />
              </S.TaskActions>
            </S.TaskItem>
          ))
        ) : (
          <p>There is no tasks</p>
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
