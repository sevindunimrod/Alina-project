import './App.css';
import Home from './Home/Home.js';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Products from './Products/Products.js';
import contents from './Products/Contents.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>} />        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
