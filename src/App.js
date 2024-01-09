import './App.css';
import Navbar from './Components/Navbar';
import Convertor from './Components/Convertor';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
// import Alert from './Components/Alert';
// import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
        <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/Convertor" element={<Convertor/>} />
          <Route exact path="/About" element={<About/>} />
          <Route exact path="/Contact" element={<Contact/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
