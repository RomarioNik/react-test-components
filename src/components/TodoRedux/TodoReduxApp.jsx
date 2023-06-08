import { AppBar } from "./AppBar/AppBar";
import { TaskForm } from "./TaskForm/TaskForm";
import { TaskList } from "./TaskList/TaskList";
import css from "./TodoReduxApp.module.css";

export const TodoReduxApp = () => {
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
