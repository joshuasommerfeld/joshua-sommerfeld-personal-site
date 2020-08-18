import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('Come on down works as expected.', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Come on down/i);
  global.scrollTo = jest.fn()

  fireEvent.click(linkElement);
  expect(global.scrollTo).toHaveBeenCalled();
});
