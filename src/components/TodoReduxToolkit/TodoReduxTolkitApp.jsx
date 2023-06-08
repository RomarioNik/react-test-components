import { AppBar } from "./AppBar/AppBar";
import { TaskForm } from "./TaskForm/TaskForm";
import { TaskList } from "./TaskList/TaskList";
import css from "./TodoReduxTolkitApp.module.css";

export const TodoReduxTolkitApp = () => {
  return (
    <div className={css.containerTodo}>
      <div className={css.appBar}>
        <AppBar />
      </div>

      <TaskForm />
      <TaskList />
    </div>
  );
};
