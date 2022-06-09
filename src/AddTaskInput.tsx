import { PlusCircle } from "phosphor-react";
import styles from "./AddTaskInput.module.css";

interface AddTaskInputProps {
  onAddNewTask: () => void;
  newTask: string;
  setNewTask: (value: string) => void;
}

export function AddTaskInput({
  onAddNewTask,
  newTask,
  setNewTask,
}: AddTaskInputProps) {
  function handleAddNewTask() {
    if (newTask.trim().length !== 0) {
      onAddNewTask();
    }
  }

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
      />
      <button
        type="submit"
        className={styles.button}
        onClick={handleAddNewTask}
      >
        <span>Criar</span>
        <PlusCircle size="1rem" weight="bold" />
      </button>
    </div>
  );
}
