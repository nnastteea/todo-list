import { Task } from "@interfaces/interfaces";

export interface TaskListProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  setIsEditTask: React.Dispatch<React.SetStateAction<Task | null>>;
}
