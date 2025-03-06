import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import InputTodo from './InputTodo';

import '@testing-library/jest-dom';

describe('InputTodo component', () => {
  const MockAddTodoProps = jest.fn();

  it('should render input field and submit button', () => {
    render(<InputTodo addTodoProps={MockAddTodoProps} />);

    const inputElement = screen.getByLabelText(/add-todo/i);
    expect(inputElement).toBeInTheDocument();

    const submitBtn = screen.getByRole('button', { name: /submit/i });
    expect(submitBtn).toBeInTheDocument();
  });

  it('should call the function and accept inputs in form submission', () => {
    const newTodo = 'New Todo';
    render(<InputTodo addTodoProps={MockAddTodoProps} />);
    const inputElement = screen.getByLabelText(/add-todo/i);
    fireEvent.change(inputElement, { target: { value: newTodo } });

    expect(inputElement.value).toBe(newTodo);
  });
});
