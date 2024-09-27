import { Task } from "@interfaces/Task";

export interface FormToDoProps {
  addTask: (taskName: string) => void;
  isEditTask: Task | null;
  editTask: (task: Task) => void;
}
