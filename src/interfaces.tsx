export interface Task {
  id: number;
  name: string;
  completed: boolean;
}

export interface TaskListProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  setIsEditTask: React.Dispatch<React.SetStateAction<Task | null>>;
}

export interface FormToDoProps {
  addTask: (taskName: string) => void;
  isEditTask: Task | null;
  editTask: (task: Task) => void;
}
