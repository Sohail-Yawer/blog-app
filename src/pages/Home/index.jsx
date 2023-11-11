// Home.js
import React, { useEffect } from 'react';
import SearchBox from '../../components/searchbox/searchbox.component';
import CreateBlog from '../../components/createblog/createblog.component';
import BlogList from '../../components/bloglist/bloglist.component';
import { useYourContext, ACTIONS } from '../../context/context';

const Home = () => {
  const { state, dispatch } = useYourContext();

  useEffect(() => {
    fetch('http://localhost:3002/blogs')
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.FETCH_BLOGS, payload: data }))
      .catch((error) => {
        console.error('Error fetching blogs:', error);
        dispatch({ type: ACTIONS.SET_LOADING, payload: false });
      });
  }, [dispatch]);

  const handleCreateBlogClick = () => {
    dispatch({ type: ACTIONS.SHOW_CREATE_BLOG });
  };

  const handleBlogListClick = () => {
    dispatch({ type: ACTIONS.SHOW_BLOG_LIST });
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
      .then((data) => dispatch({ type: ACTIONS.PUBLISH_BLOG, payload: data }))
      .catch((error) => {
        console.error('Error publishing blog:', error);
        // Handle error as needed
      });
  };

  const searchBlogs = (searchTerm) => {
    dispatch({ type: ACTIONS.SEARCH_BLOGS, payload: searchTerm });
  };

  return (
    <div>
      <h2>Home page</h2>
      <SearchBox onChange={searchBlogs} />
      {state.loading && <p>Loading...</p>}
      <button type="button" onClick={handleCreateBlogClick}>
        New Post
      </button>
      <button type="button" onClick={handleBlogListClick}>
        Published
      </button>
      <div className="btn-click-area">
        {state.showCreateBlog && <CreateBlog onPublish={handlePublish} />}
        {state.showBlogList && <BlogList blogs={state.blogs} />}
      </div>
    </div>
  );
};

export default Home;
