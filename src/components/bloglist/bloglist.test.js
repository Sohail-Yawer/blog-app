/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render } from '@testing-library/react';
import BlogList from './bloglist.component';

describe('BlogList Component', () => {
  it('renders a list of blogs', () => {
    // Dummy data for testing
    const blogs = [
      { id: 1, title: 'Blog 1', content: 'Content for Blog 1' },
      { id: 2, title: 'Blog 2', content: 'Content for Blog 2' },
      { id: 3, title: 'Blog 3', content: 'Content for Blog 3' },
    ];

    // Render the component with the dummy data
    const { getByText } = render(<BlogList blogs={blogs} />);

    // Check if the blog titles and content are present in the document
    blogs.forEach(blog => {
      const titleElement = getByText(blog.title);
      const contentElement = getByText(blog.content);

      expect(titleElement).toBeInTheDocument();
      expect(contentElement).toBeInTheDocument();
    });
  });

  it('renders "Blog List" heading', () => {
    // Dummy data for testing
    const blogs = [];

    // Render the component with the dummy data
    const { getByText } = render(<BlogList blogs={blogs} />);

    // Check if the "Blog List" heading is present in the document
    const headingElement = getByText('Blog List');
    expect(headingElement).toBeInTheDocument();
  });
});
