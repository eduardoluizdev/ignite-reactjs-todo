import { useEffect, useState } from "react";
import { Task } from "./App";
import clipboard from "./assets/clipboard.svg";
import { TaskItem } from "./TaskItem";
import styles from "./TaskList.module.css";

interface TaskListProps {
  tasks: Task[];
  onDeleteTask: (id: string) => void;
  onCompleteTask: (id: string) => void;
}

export function TaskList({
  tasks,
  onDeleteTask,
  onCompleteTask,
}: TaskListProps) {
  const [completedTasks, setCompletedTasks] = useState(0);
  useEffect(() => {
    const completedTasksLength = tasks.filter(
      (task) => task.isCompleted
    ).length;
    setCompletedTasks(completedTasksLength);
  }, [tasks]);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.tasksCreated}>
          <p>Tarefas criadas</p>
          <span>{tasks.length}</span>
        </div>
        <div className={styles.tasksDone}>
          <p>Concluídas</p>
          <span>
            {!tasks.length ? 0 : `${completedTasks} de ${tasks.length}`}
          </span>
        </div>
      </header>
      <section className={styles.taskList}>
        {tasks.length === 0 ? (
          <div className={styles.noTasksList}>
            <img
              src={clipboard}
              alt="Imagem de clipboard quando não houver tarefas cadastradas"
            />
            <p>Você ainda não tem tarefas cadastradas</p>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        ) : (
          tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onDeleteTask={onDeleteTask}
              onCompleteTask={onCompleteTask}
            />
          ))
        )}
      </section>
    </>
  );
}
