import { useState } from 'react';
import { Form, TodoTextarea, EddTodoButton } from './TodoEditor.styled';

const TodoEditor = ({ onToggleModal, onAddTodo }) => {
  const [message, setMessage] = useState('');

  const handleChange = e => {
    setMessage(e.target.value);
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    onAddTodo(message);
    setMessage('');
    onToggleModal();
  };

  return (
    <Form onSubmit={handleSubmitForm}>
      <TodoTextarea value={message} onChange={handleChange}></TodoTextarea>
      <EddTodoButton>Edd todo</EddTodoButton>
    </Form>
  );
};

export default TodoEditor;
