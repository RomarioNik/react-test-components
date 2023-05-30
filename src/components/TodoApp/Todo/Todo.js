import { Button, TodoTask, TextWrap, TodoCheckbox } from './Todo.styled';

const Todo = ({ text, copmleted, onToggleCompleted, onDeleteTodo }) => {
  return (
    <>
      <TextWrap>
        <TodoCheckbox type="checkbox" checked={copmleted || false} onChange={onToggleCompleted} />
        <TodoTask copmleted={copmleted}>{text}</TodoTask>
      </TextWrap>

      <Button onClick={onDeleteTodo}>Delete</Button>
    </>
  );
};

export default Todo;
