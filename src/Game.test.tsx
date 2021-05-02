import React from 'react';
import { render, screen } from '@testing-library/react';
import Game from './Game';

test('template', () => {
  render(<Game />);
  expect(true)
});
