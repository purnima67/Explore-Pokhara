import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-gray-500 to-black p-2 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          Explore Pokhara
        </div>
        
        <div className="block lg:hidden">
          <button onClick={toggleSidebar} className="text-white focus:outline-none">
            <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
          </button>
        </div>
        
        <div className="hidden lg:flex space-x-6">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/Attractions" className="text-white hover:text-gray-300">Attractions</Link>
          <Link to="/Activities" className="text-white hover:text-gray-300">Activities</Link>
          <Link to="/Hotels" className="text-white hover:text-gray-300">Hotels</Link>
          <Link to="/Contact" className="text-white hover:text-gray-300">Contact</Link>
        </div>
        
        <div className="hidden md:flex items-center">
          <input 
            type="text" 
            className="p-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" 
            placeholder="Search..." />
          <button 
            className="p-2 bg-yellow-500 text-white rounded-r-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400">
            Search
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={closeSidebar}></div>
      <div className={`fixed inset-y-0 left-0 bg-white w-64 z-50 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`}>
        <div className="h-full flex flex-col p-4">
          <button onClick={closeSidebar} className="text-black focus:outline-none mb-4">
            <FontAwesomeIcon icon={faTimes} className="h-6 w-6" />
          </button>
          <Link to="/" onClick={closeSidebar} className="block text-black hover:text-gray-700 mb-2">Home</Link>
          <Link to="/Attractions" onClick={closeSidebar} className="block text-black hover:text-gray-700 mb-2">Attractions</Link>
          <Link to="/Activities" onClick={closeSidebar} className="block text-black hover:text-gray-700 mb-2">Activities</Link>
          <Link to="/Hotels" onClick={closeSidebar} className="block text-black hover:text-gray-700 mb-2">Hotels</Link>
          <Link to="/Contact" onClick={closeSidebar} className="block text-black hover:text-gray-700 mb-2">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
