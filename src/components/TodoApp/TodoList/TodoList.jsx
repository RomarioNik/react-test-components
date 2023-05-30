import { useState } from 'react';
import TodoEditor from '../TodoEditor';
import TodoFind from '../TodoFind';
import Todo from '../Todo';
import { IconButton } from '../../IconButton/IconButton';
import { Modal } from '../../Modal/Modal';
import { ReactComponent as AddIcon } from '../../../icons/add.svg';
import { Wrapper, Statistic, ListTodo, ItemTodo, Total, Finished } from './TodoList.styled';

const TodoList = ({
  todos,
  filter,
  onFilter,
  onAddTodo,
  onDeleteTodo,
  onTotalTodos,
  onFinishedTodos,
  onToggleCompleted,
}) => {
  const [modal, setModal] = useState(false);

  const onToggleModal = () => {
    setModal(prev => !prev);
  };

  return (
    <Wrapper>
      <IconButton type="button" onClick={onToggleModal} aria-label="Add Todo">
        <AddIcon width="40" height="40" stroke="#fff" />
      </IconButton>
      {modal && (
        <Modal onToggleModal={onToggleModal}>
          <TodoEditor onAddTodo={onAddTodo} onToggleModal={onToggleModal} />
        </Modal>
      )}

      <Statistic>
        <Total>Total - {onTotalTodos()}</Total>
        <Finished>{onFinishedTodos()} - Finished</Finished>
      </Statistic>
      <TodoFind filter={filter} onFilter={onFilter} />
      <ListTodo>
        {todos.map(({ id, text, copmleted }) => (
          <ItemTodo key={id}>
            <Todo
              text={text}
              copmleted={copmleted}
              onToggleCompleted={() => onToggleCompleted(id)}
              onDeleteTodo={() => onDeleteTodo(id)}
            />
          </ItemTodo>
        ))}
      </ListTodo>
    </Wrapper>
  );
};

export default TodoList;
