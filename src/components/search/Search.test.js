import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Search from './Search';

import '@testing-library/jest-dom';

describe('Search Component', () => {
  const newValue = 'Test Todo';
  const mockHandleSearch = jest.fn();

  it('should display correct search query in the input', () => {
    render(<Search searchQuery={newValue} handleSearch={mockHandleSearch} />);

    const inputElement = screen.getByLabelText(/search/i);

    expect(inputElement.value).toBe(newValue);
  });

  it('should call handleSearch function when input value changes', () => {
    render(<Search searchQuery="" handleSearch={mockHandleSearch} />);

    const inputElement = screen.getByLabelText(/search/i);

    fireEvent.change(inputElement, { target: { value: 'new search' } });

    expect(mockHandleSearch).toHaveBeenCalled();
  });
});
