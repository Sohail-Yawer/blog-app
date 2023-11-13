import React, { useState } from 'react';

const CreateBlog = ({ onPublish }) => {
  const [newBlog, setNewBlog] = useState({ title: '', content: '' });
  const [error, setError] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [contentError, setContentError] = useState(false);

  const handleTitleChange = (e) => {
    setNewBlog({ ...newBlog, title: e.target.value });
    setTitleError(false); // Reset title error when the user starts typing again
  };

  const handleContentChange = (e) => {
    setNewBlog({ ...newBlog, content: e.target.value });
    setContentError(false); // Reset content error when the user starts typing again
  };

  const handlePublish = () => {
    const { title, content } = newBlog;

    if (!title.trim() || !content.trim()) {
      setError('Title and content cannot be empty.');
      setTitleError(!title.trim()); // Set title error if title is empty
      setContentError(!content.trim()); // Set content error if content is empty
      return;
    }

    setError('');

    onPublish({ title, content });

    setNewBlog({ title: '', content: '' });
  };

  return (
    <div>
      <h2>Create Blog</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <label htmlFor="titleInput">Title:</label>
      <input
        id="titleInput"
        type="text"
        value={newBlog.title}
        onChange={handleTitleChange}
        style={{ borderColor: titleError ? 'red' : '' }}
      />
      {titleError && <Alert message="Title cannot be empty" />}
      <br />
      <label htmlFor="contentInput">Content:</label>
      <textarea
        id="contentInput"
        value={newBlog.content}
        onChange={handleContentChange}
        style={{ borderColor: contentError ? 'red' : '' }}
      />
      {contentError && <Alert message="Content cannot be empty" />}
      <br />
      <button onClick={handlePublish}>Publish</button>
    </div>
  );
};

const Alert = ({ message }) => (
  <div style={{ color: 'red', marginTop: '5px' }}>
    <small>{message}</small>
  </div>
);

export default CreateBlog;
