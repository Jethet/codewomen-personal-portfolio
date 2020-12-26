import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';

import './App.css';

const App = () =>{
  return (
    <div className="App">
      <Router>      
          <Header />
          <Route path="/" exact component={Home} />                          
      </Router>
    </div>
  )
}

export default App;
