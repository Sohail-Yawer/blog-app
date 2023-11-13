import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CreateBlog from './createblog.component';

test('renders Create Blog component', () => {
  render(<CreateBlog onPublish={() => {}} />);

  const titleInput = screen.getByLabelText('Title:');
  const contentInput = screen.getByLabelText('Content:');
  const publishButton = screen.getByText('Publish');

  expect(titleInput).toBeInTheDocument();
  expect(contentInput).toBeInTheDocument();
  expect(publishButton).toBeInTheDocument();
});

test('displays error messages for empty fields', () => {
  render(<CreateBlog onPublish={() => {}} />);

  const publishButton = screen.getByText('Publish');

  fireEvent.click(publishButton);

  const titleErrorMessage = screen.getByText('Title cannot be empty');
  const contentErrorMessage = screen.getByText('Content cannot be empty');

  expect(titleErrorMessage).toBeInTheDocument();
  expect(contentErrorMessage).toBeInTheDocument();
});

test('clears error messages when typing in inputs', () => {
  render(<CreateBlog onPublish={() => {}} />);

  const publishButton = screen.getByText('Publish');

  fireEvent.click(publishButton);

  const titleErrorMessage = screen.getByText('Title cannot be empty');
  const contentErrorMessage = screen.getByText('Content cannot be empty');

  expect(titleErrorMessage).toBeInTheDocument();
  expect(contentErrorMessage).toBeInTheDocument();

  // Typing in inputs to clear the errors
  fireEvent.change(screen.getByLabelText('Title:'), { target: { value: 'Test Title' } });
  fireEvent.change(screen.getByLabelText('Content:'), { target: { value: 'Test Content' } });

  expect(titleErrorMessage).not.toBeInTheDocument();
  expect(contentErrorMessage).not.toBeInTheDocument();
});

test('calls onPublish with the correct data when fields are filled', () => {
  const onPublishMock = jest.fn();
  render(<CreateBlog onPublish={onPublishMock} />);

  fireEvent.change(screen.getByLabelText('Title:'), { target: { value: 'Test Title' } });
  fireEvent.change(screen.getByLabelText('Content:'), { target: { value: 'Test Content' } });

  fireEvent.click(screen.getByText('Publish'));

  expect(onPublishMock).toHaveBeenCalledWith({ title: 'Test Title', content: 'Test Content' });
});
