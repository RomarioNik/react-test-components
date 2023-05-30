import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import { Container } from './App.styled.jsx';
import { todos } from '../data';

// import TodoList from './TodoList';

class App extends Component {
  state = {
    todos: todos,
    filter: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevTodos = this.state.todos;
    const nextTodos = prevState.todos;
    // закрываем модалку, если todos массив изменился
    if (prevTodos.length > nextTodos.length && nextTodos.length !== 0) {
      this.toggleModal();
    }
  }

  addTodo = message => {
    const obj = {
      id: uuidv4(),
      text: message,
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [obj, ...todos],
    }));

    // закрываем модалку, если todos массив изменился
    // this.toggleModal();
  };

  filterChange = e => {
    this.setState({ filter: e.target.value.toLowerCase() });
  };

  filterTodos = () => {
    const normalizeFilter = this.state.filter.toLowerCase();
    return this.state.todos.filter(el => el.text.toLowerCase().includes(normalizeFilter));
  };

  toggleCompleted = id => {
    this.setState(({ todos }) => ({
      todos: todos.map(todo => (todo.id === id ? { ...todo, copmleted: !todo.copmleted } : todo)),
    }));
  };

  deleteTodo = id => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== id),
    }));
  };

  getTotalTodos = () => {
    return this.state.todos.length;
  };

  getFinishedTodos = () => {
    return this.state.todos.reduce((acc, el) => {
      return el.copmleted ? acc + 1 : acc;
    }, 0);
  };

  render() {
    const { todos, filter, modal } = this.state;

    return (
      <Container>
        {/* <TodoList
          modal={modal}
          todos={this.filterTodos()}
          filter={filter}
          onFilter={this.filterChange}
          onAddTodo={this.addTodo}
          onDeleteTodo={this.deleteTodo}
          onTotalTodos={this.getTotalTodos}
          onFinishedTodos={this.getFinishedTodos}
          onToggleCompleted={this.toggleCompleted}
          onToggleModal={this.toggleModal}
        /> */}

        {/* notification package */}
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
      </Container>
    );
  }
}

export default App;
