import { Trash } from "phosphor-react";
import styles from "./TaskItem.module.css";
import checkbox from "./assets/check.svg";
import checked from "./assets/checked.svg";
import { Task } from "./App";

interface TaskItemProps {
  task: Task;
  onDeleteTask: (id: string) => void;
  onCompleteTask: (id: string) => void;
}

export function TaskItem({
  task,
  onDeleteTask,
  onCompleteTask,
}: TaskItemProps) {
  function handleDeleteTask() {
    onDeleteTask(task.id);
  }

  function handleCompleteTask() {
    onCompleteTask(task.id);
  }
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.checkbox} onClick={handleCompleteTask}>
          {task.isCompleted ? (
            <img src={checked} alt="checkbox" />
          ) : (
            <img src={checkbox} alt="checkbox" />
          )}
        </div>
        <p
          className={task.isCompleted ? styles.taskCompleted : styles.taskText}
        >
          {task.content}
        </p>
        <div className={styles.deleteButton} onClick={handleDeleteTask}>
          <Trash weight="bold" />
        </div>
      </div>
    </>
  );
}
