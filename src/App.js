import './App.css';
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Comp/Home/home.js';
import About from './Comp/About/about.js';
import Faq from './Comp/Faq/faq.js';


function App() {
  return (
    <>
    <div className="container">  
      <div className="row">
        <div className="col-sm-2">
        <Link to="/" className='link'><h4>Home</h4></Link>
        </div>
        <div className="col-sm-2">
        <Link to="/about" className='link'><h4>About</h4></Link>
        </div>
        <div className="col-sm-2">
        <Link to="/faq" className='link'><h4>FAQ</h4></Link>
        </div>
        <div className="col-auto">
        <h3>Trands</h3>
        </div>
      </div>
    </div>
    <br />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/faq" element={<Faq />} />
    </Routes>
    </>
  );
}

export default App;
