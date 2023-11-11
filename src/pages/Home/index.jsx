import React, { useEffect, useState } from 'react';
import SearchBox from '../../components/searchbox/searchbox.component';
import CreateBlog from '../../components/createblog/createblog.component';
import BlogList from '../../components/bloglist/bloglist.component';

const Home = () => {
  const [showCreateBlog, setShowCreateBlog] = useState(true);
  const [showBlogList, setShowBlogList] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    fetch('http://localhost:3002/blogs')
      .then(response => response.json())
      .then(data => {
        setBlogs(data);
        setRecords(data);
        setLoading(false); // Set loading to false 
      })
      .catch(error => {
        console.error('Error fetching blogs:', error);
        setLoading(false); 
      });
  }, []);

  const handleCreateBlogClick = () => {
    setShowCreateBlog(true);
    setShowBlogList(false);
  };

  const handleBlogListClick = () => {
    setShowCreateBlog(false);
    setShowBlogList(true);
  };

  const handlePublish = (newBlog) => {
    fetch('http://localhost:3002/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBlog),
    })
      .then((response) => response.json())
      .then((data) => {
        // Update the local state with the new blog
        setBlogs((prevBlogs) => [...prevBlogs, data]);
        setRecords((prevRecords) => [...prevRecords, data]);
  
        setShowCreateBlog(false);
        setShowBlogList(true);
      })
      .catch((error) => {
        console.error('Error publishing blog:', error);
        // Handle error as needed
      });
  };

  const searchBlogs = (searchTerm) => {
    const filteredBlogs = records.filter(
      (blog) => blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setBlogs(filteredBlogs);
  };

  return (
    <div>
      <h2>Home page</h2>
      <SearchBox onSearch={searchBlogs} />
      <button type="button" onClick={handleCreateBlogClick}>
        New Post
      </button>
      <button type="button" onClick={handleBlogListClick}>
        Published
      </button>
      <div className="btn-click-area">
        {showCreateBlog && <CreateBlog onPublish={handlePublish} />}
        {showBlogList && <BlogList blogs={blogs} />}
      </div>
    </div>
  );
};

export default Home;