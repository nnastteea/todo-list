import { Task } from "@interfaces/interfaces";

export interface FormToDoProps {
  addTask: (taskName: string) => void;
  isEditTask: Task | null;
  editTask: (task: Task) => void;
}
