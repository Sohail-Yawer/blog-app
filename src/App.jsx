// App.js
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Blog from './pages/Blog';
import { YourProvider } from './context/context';

const App = () => {
  return (
    <YourProvider>
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/blog/:id" element={<Blog />} />
          </Routes>
        </Router>
      </div>
    </YourProvider>
  );
};

export default App;
