import Page from './components/page.js';
import React from 'react';
import './App.css';
import About from './components/about';
import Ass from './components/ass';
import Home from './components/home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";


function App() {
  return (
    <div className='App'>
  <Page />

   
    <Router>
        <Routes>
           <Route path="/about" element={<About />} />
           <Route path="/ass" element={<Ass />} />
           <Route path="/" element={<Home />} />
        </Routes>
    </Router
    </div>
   
  );
}

export default App;
