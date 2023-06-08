import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
// redux
import { deleteTask, toggleCompleted } from "../../../redux/actions";
// components
import css from "./Task.module.css";

export const Task = ({ task: { id, text, completed } }) => {
  const dispatch = useDispatch();

  const handleToggle = () => dispatch(toggleCompleted(id));
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
