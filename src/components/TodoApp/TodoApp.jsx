import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TodoList from './TodoList';
import { todosData } from '../../data';

const TodoApp = () => {
  const [todos, setTodos] = useState(todosData);
  const [filter, setFilter] = useState('');

  //       componentDidUpdate(prevProps, prevState) {
  //     const prevTodos = this.state.todos;
  //     const nextTodos = prevState.todos;
  //     // закрываем модалку, если todos массив изменился
  //     if (prevTodos.length > nextTodos.length && nextTodos.length !== 0) {
  //       this.toggleModal();
  //     }
  //   }

  const addTodo = message => {
    const newTodo = {
      id: uuidv4(),
      text: message,
      completed: false,
    };
    setTodos(prev => [newTodo, ...prev]);
    // закрываем модалку, если todos массив изменился
    // this.toggleModal();
  };

  const filterChange = e => {
    setFilter(e.target.value.toLowerCase());
  };

  const filterTodos = () => {
    const normalizeFilter = filter.toLowerCase();
    return todos.filter(el => el.text.toLowerCase().includes(normalizeFilter));
  };

  const toggleCompleted = id => {
    setTodos(prev =>
      prev.map(todo => (todo.id === id ? { ...todo, copmleted: !todo.copmleted } : todo))
    );
  };

  const deleteTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const getTotalTodos = () => {
    return todos.length;
  };

  const getFinishedTodos = () => {
    return todos.reduce((acc, el) => {
      return el.copmleted ? acc + 1 : acc;
    }, 0);
  };

  return (
    <>
      <TodoList
        todos={filterTodos()}
        filter={filter}
        onFilter={filterChange}
        onAddTodo={addTodo}
        onDeleteTodo={deleteTodo}
        onTotalTodos={getTotalTodos}
        onFinishedTodos={getFinishedTodos}
        onToggleCompleted={toggleCompleted}
      />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default TodoApp;
