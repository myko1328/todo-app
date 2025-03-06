import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import TodoItem from './TodoItem';

import '@testing-library/jest-dom';

describe('TodoItem component', () => {
  const todoObj = {
    id: '1',
    title: 'Initial Title',
    completed: false,
  };

  const mockHandleChangeProps = jest.fn();
  const mockDeleteTodoProps = jest.fn();
  const mockSetEditId = jest.fn();
  const mockUpdateTodo = jest.fn();

  it('should render items correctly', () => {
    render(
      <TodoItem
        todo={todoObj}
        handleChangeProps={mockHandleChangeProps}
        deleteTodoProps={mockDeleteTodoProps}
        setEditId={mockSetEditId}
        updateTodo={mockUpdateTodo}
        editId={null}
      />
    );

    const titleElement = screen.getByText(/Initial Title/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('should delete todo if delete btn is clicked', () => {
    render(
      <TodoItem
        todo={todoObj}
        handleChangeProps={mockHandleChangeProps}
        deleteTodoProps={mockDeleteTodoProps}
        setEditId={mockSetEditId}
        updateTodo={mockUpdateTodo}
        editId={null}
      />
    );

    const deleteBtn = screen.getByRole('button', { name: /delete/i });

    fireEvent.click(deleteBtn);

    expect(mockDeleteTodoProps).toHaveBeenCalled();
  });
  it('should enter edit mode and update title', () => {
    const newUpdateTitle = 'Updated Title';
    render(
      <TodoItem
        todo={todoObj}
        handleChangeProps={mockHandleChangeProps}
        deleteTodoProps={mockDeleteTodoProps}
        setEditId={mockSetEditId}
        updateTodo={mockUpdateTodo}
        editId="1"
      />
    );

    const inputElement = screen.getByLabelText(/edit-todo/i);
    expect(inputElement).toBeInTheDocument();

    fireEvent.change(inputElement, { target: { value: newUpdateTitle } });
    expect(inputElement.value).toBe(newUpdateTitle);

    const saveBtn = screen.getByRole('button', { name: /save/i });
    fireEvent.click(saveBtn);

    expect(mockUpdateTodo).toHaveBeenCalledWith('1', newUpdateTitle);
  });
});
