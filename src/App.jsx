import './App.css';
import {  BrowserRouter as Router, Route, Routes} from "react-router-dom";
//json-server --watch db.json --port 3002
import React from 'react'
import Home from './pages/Home';
import Blog from './pages/Blog';

const App = () => {
  

  return (
    <div>
      <Router>
        <Routes>
          <Route  exact path='/' Component={Home} />
          <Route path='/blog/:id' Component={Blog}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
