import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { Header } from "./Header";
import { AddTaskInput } from "./AddTaskInput";
import { TaskList } from "./TaskList";
import styles from "./App.module.css";

export type Task = {
  id: string;
  content: string;
  isCompleted: boolean;
};

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  function addNewTask() {
    const task = {
      id: uuidv4(),
      content: newTask,
      isCompleted: false,
    };
    setTasks([...tasks, task]);
    setNewTask("");
  }

  function deleteTask(id: string) {
    const arrayWithoutDeletedTask = tasks.filter((task) => task.id !== id);
    setTasks(arrayWithoutDeletedTask);
  }

  function completeTask(id: string) {
    const task = tasks.find((task) => task.id === id);
    if (task) {
      task.isCompleted = !task.isCompleted;
      setTasks([...tasks]);
    }
  }

  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <div className={styles.taskInput}>
          <AddTaskInput
            onAddNewTask={addNewTask}
            newTask={newTask}
            setNewTask={setNewTask}
          />
        </div>
        <div className={styles.taskList}>
          <TaskList
            tasks={tasks}
            onDeleteTask={deleteTask}
            onCompleteTask={completeTask}
          />
        </div>
      </main>
    </>
  );
}

export default App;
