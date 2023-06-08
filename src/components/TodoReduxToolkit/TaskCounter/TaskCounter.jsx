import { useSelector } from "react-redux";
import { getTasks } from "../../../redux/selectors";
import css from "./TaskCounter.module.css";

export const TaskCounter = () => {
  const tasks = useSelector(getTasks);

  const countTasks = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    {
      active: 0,
      completed: 0,
    }
  );

  return (
    <div>
      <p className={css.text}>Active: {countTasks.active}</p>
      <p className={css.text}>Completed: {countTasks.completed}</p>
    </div>
  );
};
