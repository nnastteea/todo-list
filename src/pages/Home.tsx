import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import FormToDo from "../components/FormToDo";
import TaskList from "../components/TaskList";
import * as S from "../GlobalStyles";
import { Task } from "../interfaces";
import GeneralLayout from "./GeneralLauout";

function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [nextId, setNextId] = useState(1);
  const [isEditTask, setIsEditTask] = useState<Task | null>(null);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      const parsedTasks: Task[] = JSON.parse(storedTasks);
      setTasks(parsedTasks);
      setNextId(
        parsedTasks.length > 0 ? parsedTasks[parsedTasks.length - 1].id + 1 : 1,
      );
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskName: string) => {
    const newTask: Task = {
      id: nextId,
      name: taskName,
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setNextId(nextId + 1);
    setIsEditTask(null);
  };

  const editTask = (updatedTask: Task) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task,
      ),
    );
    setIsEditTask(null);
  };

  return (
    <GeneralLayout>
      <S.MainStyle>
        <FormToDo
          addTask={addTask}
          isEditTask={isEditTask}
          editTask={editTask}
        />
        <TaskList
          tasks={tasks}
          setTasks={setTasks}
          setIsEditTask={setIsEditTask}
        />
      </S.MainStyle>
    </GeneralLayout>
  );
}

export default Home;
