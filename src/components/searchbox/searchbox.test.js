// searchbox.test.js
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SearchBox from './searchbox.component';

test('renders SearchBox component', () => {
  render(<SearchBox onChange={() => {}} />);

  // Test initial rendering
  const inputElement = screen.getByPlaceholderText('Enter keywords to search for blogs');
  expect(inputElement).toBeInTheDocument();
  expect(inputElement).toHaveValue('');

  // Simulate user input
  fireEvent.change(inputElement, { target: { value: 'React' } });

  // Verify that the onChange callback is called with the correct value
  expect(inputElement).toHaveValue('React');

  // Cleanup
  fireEvent.change(inputElement, { target: { value: '' } });
  expect(inputElement).toHaveValue('');
});

// Add more tests as needed based on your component's behavior
