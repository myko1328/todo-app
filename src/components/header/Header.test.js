import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

import '@testing-library/jest-dom';

describe('Header Component', () => {
  test('should render header with correct title and subtitle', () => {
    render(<Header />);
    const titleElement = screen.getByRole('heading', {
      name: /simple todo app/i,
    });

    const subtitleElement = screen.getByText(
      /please add to-dos item\(s\) through the input field/i
    );

    expect(titleElement).toBeInTheDocument();
    expect(subtitleElement).toBeInTheDocument();
  });
});
