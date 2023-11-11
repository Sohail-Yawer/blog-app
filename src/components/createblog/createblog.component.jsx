import React, { useState } from 'react';

const CreateBlog = ({ onPublish }) => {
  const [newBlog, setNewBlog] = useState({ title: '', content: '' });
  const [error, setError] = useState('');

  const handleTitleChange = (e) => {
    setNewBlog({ ...newBlog, title: e.target.value });
  };

  const handleContentChange = (e) => {
    setNewBlog({ ...newBlog, content: e.target.value });
  };

  const handlePublish = () => {
    const { title, content } = newBlog;

    
    if (!title.trim() || !content.trim()) {
      setError('Title and content cannot be empty.');
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
      <label>Title:</label>
      <input type="text" value={newBlog.title} onChange={handleTitleChange} />
      <br />
      <label>Content:</label>
      <textarea value={newBlog.content} onChange={handleContentChange} />
      <br />
      <button onClick={handlePublish}>Publish</button>
    </div>
  );
};

export default CreateBlog;
