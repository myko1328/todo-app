import React from 'react';
import { render, screen } from '@testing-library/react';
import TodosList from './TodosList';
import '@testing-library/jest-dom';
describe('TodoList component', () => {
  const mockHandleChange = jest.fn();
  const mockDeleteTodo = jest.fn();
  const mockSetEditId = jest.fn();
  const mockUpdateTodo = jest.fn();

  const mockTodos = [
    { id: '1', title: 'title1', completed: false },
    { id: '2', title: 'title2', completed: true },

    { id: '3', title: 'title3', completed: false },
  ];
  it('should render correct number of TodoItem components', () => {
    render(
      <TodosList
        todos={mockTodos}
        handleChangeProps={mockHandleChange}
        deleteTodoProps={mockDeleteTodo}
        setEditId={mockSetEditId}
        editId={null}
        updateTodo={mockUpdateTodo}
      />
    );

    const getTodoItems = screen.getAllByTestId('todo-item');

    expect(getTodoItems).toHaveLength(mockTodos.length);
  });
});
