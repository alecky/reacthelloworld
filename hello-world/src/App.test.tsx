
import App from './App';
import React from 'react';
import { vi } from 'vitest';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

vi.mock('./HelloWorld', () => ({
  default: () => <h1>Hello, World!</h1>,
}));

it('renders HelloWorld component', () => {
  render(<App />);
  const headingElement = screen.getByRole('heading', { name: /hello, world!/i });
  expect(headingElement).toBeInTheDocument();
});
