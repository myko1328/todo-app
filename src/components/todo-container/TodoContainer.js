import React, { useState } from 'react';
import TodosList from '../todo-list/TodosList';
import Header from '../header/Header';
import { v4 as uuidv4 } from 'uuid';
import Search from '../search/Search';
import InputTodo from '../input-todo/InputTodo';

const TodoContainer = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [editId, setEditId] = useState(null);
  const [todos, setTodos] = useState([
    {
      // id: uuid.v4(),
      id: uuidv4(),
      title: 'Setup development environment',
      completed: true,
    },
    {
      // id: uuid.v4(),
      id: uuidv4(),
      title: 'Develop website and add content',
      completed: false,
    },
    {
      // id: uuid.v4(),
      id: uuidv4(),
      title: 'Deploy to live server',
      completed: false,
    },
  ]);

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleChange = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const delTodo = (id) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  const addTodoItem = (title) => {
    const newTodo = {
      // id: uuid.v4(),
      id: uuidv4(),
      title: title,
      completed: false,
    };

    setTodos((prevState) => [...prevState, newTodo]);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const updateTodo = (id, newTitle) => {
    setTodos((prevState) =>
      prevState.map((todo) => ({
        ...todo,
        title: todo.id === id ? newTitle : todo.title,
      }))
    );

    setEditId(null);
  };

  return (
    <>
      <div className="container">
        <Header />
        <InputTodo addTodoProps={addTodoItem} />
        <TodosList
          todos={filteredTodos}
          handleChangeProps={handleChange}
          deleteTodoProps={delTodo}
          setEditId={setEditId}
          editId={editId}
          updateTodo={updateTodo}
        />
      </div>

      <Search searchQuery={searchQuery} handleSearch={handleSearch} />
    </>
  );
};

export default TodoContainer;
