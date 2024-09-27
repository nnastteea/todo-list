import { Task } from "@interfaces/Task";

export interface TaskListProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  setIsEditTask: React.Dispatch<React.SetStateAction<Task | null>>;
}
