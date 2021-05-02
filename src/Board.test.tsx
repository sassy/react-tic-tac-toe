import React from 'react';
import { render, screen } from '@testing-library/react';
import Board from './Board';

test('template', () => {
  render(<Board />);
  expect(true)
});
