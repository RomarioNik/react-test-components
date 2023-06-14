import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
// redux
import { deleteTask, toggleCompleted } from "../reduxx/operations";
// components
import css from "./Task.module.css";

export const Task = ({ task }) => {
  const { id, text, completed } = task;

  const dispatch = useDispatch();

  const handleToggle = () => dispatch(toggleCompleted(task));
  const handleDelete = () => dispatch(deleteTask(id));

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={completed}
        onChange={handleToggle}
      />
      <p className={css.text}>{text}</p>
      <button className={css.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
