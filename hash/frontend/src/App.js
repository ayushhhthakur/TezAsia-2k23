import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import Routes instead of Switch
import './App.css';
import Navbar from './conponents/Navbar';
import Home from './conponents/Home';
import About from './conponents/About';
import HowTo from './conponents/HowTo';
import Creators from './conponents/Creators';
import Contact from './conponents/Contact';
import Footer from './conponents/Footer';
import Login from './conponents/Login'; // Import your Login component
import Signup from './conponents/Signup'; // Import your Login component

function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/" element={<Navbar />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-to" element={<HowTo />} />
          <Route path="/creators" element={<Creators />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login" element={<Signup />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
