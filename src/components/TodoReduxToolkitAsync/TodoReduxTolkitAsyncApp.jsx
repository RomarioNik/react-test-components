import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppBar } from "./AppBar/AppBar";
import { TaskForm } from "./TaskForm/TaskForm";
import { TaskList } from "./TaskList/TaskList";
import css from "./TodoReduxTolkitApp.module.css";
import { fetchTasks } from "./reduxx/operations";
import { getError, getIsLoading } from "./reduxx/selectors";

export const TodoReduxTolkitAsyncApp = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div className={css.containerTodo}>
      <div className={css.appBar}>
        <AppBar />
      </div>

      <TaskForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <TaskList />
    </div>
  );
};
