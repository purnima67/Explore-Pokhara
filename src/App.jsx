import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Home from './components/Home';
import Contact from './components/Contact';
import Attractions from './components/Attractions';


import Footer from './components/Footer';
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Attractions" element={<Attractions />} />
      
        </Routes>
       <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
