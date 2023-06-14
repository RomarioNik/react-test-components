import { useSelector, useDispatch } from "react-redux";
// redux
import { setStatusFilter } from "../reduxx/filtersSlice";
import { statusFilters } from "../reduxx/constants";
import { getStatusFilter } from "../reduxx/selectors";
// components
import { Button } from "../Button/Button";
import css from "./StatusFilter.module.css";

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);

  const handleFilterChange = (value) => dispatch(setStatusFilter(value));

  const buttons = Object.keys(statusFilters);

  return (
    <div className={css.wrapper}>
      {buttons.map((btn, idx) => (
        <Button
          key={idx}
          selected={filter === statusFilters[btn]}
          onClick={() => handleFilterChange(statusFilters[btn])}
        >
          {btn}
        </Button>
      ))}
      {/* <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button> */}
    </div>
  );
};
