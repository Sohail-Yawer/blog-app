
import React, { createContext, useReducer, useContext } from 'react';

const initialState = {
  showCreateBlog: true,
  showBlogList: false,
  blogs: [],
  records: [],
  loading: true,
};

const ACTIONS = {
  SET_LOADING: 'SET_LOADING',
  FETCH_BLOGS: 'FETCH_BLOGS',
  PUBLISH_BLOG: 'PUBLISH_BLOG',
  SEARCH_BLOGS: 'SEARCH_BLOGS',
  SHOW_CREATE_BLOG: 'SHOW_CREATE_BLOG',
  SHOW_BLOG_LIST: 'SHOW_BLOG_LIST',
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_LOADING:
      return { ...state, loading: action.payload };
    case ACTIONS.FETCH_BLOGS:
      return {
        ...state,
        blogs: action.payload,
        records: action.payload,
        loading: false,
      };
    case ACTIONS.PUBLISH_BLOG:
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
        records: [...state.records, action.payload],
        showCreateBlog: false,
        showBlogList: true,
      };
    case ACTIONS.SEARCH_BLOGS:
      const searchTerm = action.payload.toLowerCase();
      const filteredBlogs = state.records.filter(
        (blog) =>
          blog.title.toLowerCase().includes(searchTerm) ||
          blog.content.toLowerCase().includes(searchTerm)
      );
      return { ...state, blogs: filteredBlogs };
    case ACTIONS.SHOW_CREATE_BLOG:
      return { ...state, showCreateBlog: true, showBlogList: false };
    case ACTIONS.SHOW_BLOG_LIST:
      return { ...state, showCreateBlog: false, showBlogList: true };
    default:
      return state;
  }
};


const YourContext = createContext();


const YourProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <YourContext.Provider value={{ state, dispatch }}>
      {children}
    </YourContext.Provider>
  );
};

// custom hook to use the context
const useYourContext = () => {
  const context = useContext(YourContext);
  if (!context) {
    throw new Error('useYourContext must be used within a YourProvider');
  }
  return context;
};

export { YourProvider, useYourContext, ACTIONS };
