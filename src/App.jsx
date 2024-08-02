import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Home from './components/Home';
import Contact from './components/Contact';

import Footer from './components/Footer';

import Paragliding from './components/Paragliding';
import Hiking from './components/Hiking';
import BoatingAdventure from './components/BoatingAdventure';
import FinancialHelp  from './components/FinancialHelp';


import Yoga from './components/Yoga';

import Temples from './components/Temples';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
         
          <Route path="/ThingsToDo/Adventure/Paragliding" element={<Paragliding/>} />
          <Route path="/ThingsToDo/Hiking" element={<Hiking/>}/>
          <Route path="/ThingsToDo/Boating" element={<BoatingAdventure/>}/>
         
          <Route path="/FinancialHelp" element={<FinancialHelp/>} />
          <Route path="/TouristAttractions/Yoga" element={<Yoga/>}/>
          <Route path='/TouristAttractions/Temples' element={<Temples />}/>
         </Routes>
       <Footer/>
      </div>
    </BrowserRouter>
  );
};

export default App;