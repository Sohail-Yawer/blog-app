import React from 'react';

const BlogList = ({ blogs }) => {
  return (
    <div>
      <h2>Blog List</h2>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
