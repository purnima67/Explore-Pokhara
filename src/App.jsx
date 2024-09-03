import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Paragliding from './components/Paragliding';
import Hiking from './components/Hiking';
import Cycling from './components/Cycling';
import BoatingAdventure from './components/BoatingAdventure';
import FinancialHelp from './components/FinancialHelp';
import Street from './components/Street';
import Yoga from './components/Yoga';
import Temples from './components/Temples';
import About from './components/About';
import ATM from './components/ATM'
import ThingsToDo from './components/ThingsToDo'
import TouristAttractions from './components/TouristAttractions'
import Bunjee from './components/Bunjee'
import ZipFlyer from './components/ZipFlyer'
import EatAndDrink from './components/EatAndDrink';
import Caves from './components/Caves'
import Lakes from './components/Lakes'
import Homestay from './components/Homestay'
import Mountains from './components/Mountains';
import Gupteshwor from './components/Gupteshwor';
import Pumdikot from './components/Pumdikot';
import Museums from './components/Museums';
import DevisFall from './components/DevisFall';
import Sarangkot from './components/Sarangkot';
import PhewaLake from './components/PhewaLake';
import Bindabasini from './components/Bindabasini'
import TalBarahi from './components/TalBarahi';
import SunriseBliss from './components/SunriseBliss';
import PokharaDetails from './components/PokharaDetails';
const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/ThingsToDo/Adventure/Paragliding" element={<Paragliding />} />
          <Route path="/ThingsToDo/Hiking" element={<Hiking />} />
          <Route path="/places/shree-bindhyabasini-temple-in-pokhara" element={<Bindabasini />} />
          <Route path="/places/tal-barahi-temple-in-pokhara" element={<TalBarahi />} />
          <Route path="/places/gupteshwor-mahadev-cave-in-pokhara" element={<Gupteshwor />} />
          <Route path="/places/international-mountain-museum-in-pokhara" element={<Museums />} />
          <Route path="/places/devi's-fall-in-pokhara" element={<DevisFall />} />
          <Route path="/places/sarangkot-in-pokhara" element={<Sarangkot />} />
          <Route path="/places/phewa-lake-in-pokhara" element={<PhewaLake />} />
          <Route path="/places/pumdikot-in-pokhara" element={<Pumdikot />} />
          <Route path="/Boating" element={<BoatingAdventure />} />
          <Route path="/FinancialHelp" element={<FinancialHelp />} />
          <Route path="/TouristAttractions/Yoga" element={<Yoga />} />
          <Route path='/TouristAttractions/Temples' element={<Temples />} />
          <Route path='/CommunityFestival/Street' element={<Street />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/ATM" element={<ATM />}/>
          <Route path="/ThingsToDo/Cycling" element={<Cycling />} />
          <Route path="/ThingsToDo/Bunjee" element={<Bunjee />} />
          <Route path="/ThingsToDo" element={<ThingsToDo />} />
          <Route path="/TouristAttractions" element={<TouristAttractions />} />
          <Route path="/ThingsToDo/ZipFlyer" element={<ZipFlyer />} />
          <Route path="/EatAndDrink" element={<EatAndDrink />} />
          <Route path="/TouristAttractions/Caves" element={<Caves />} />
          <Route path="/TouristAttractions/Lakes" element={<Lakes />} />
          <Route path='/TouristAttractions/Homestay' element={<Homestay />} />
          <Route path='/Mountains' element={<Mountains />} />
          <Route path='/SunriseBliss' element={<SunriseBliss />} />
          <Route path='/PokharaDetails' element={<PokharaDetails />} />
       </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;