import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-500 to-black p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          Explore Pokhara
        </div>
        {/* Medium and smaller screens: Show menu icon */}
        <div className="block lg:hidden">
          <button className="text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        {/* Large screens and up: Show full navigation links */}
        <div className="hidden lg:flex space-x-6">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/Attractions" className="text-white hover:text-gray-300">Attractions</Link>
          <Link to="/activities" className="text-white hover:text-gray-300">Activities</Link>
          <Link to="/hotels" className="text-white hover:text-gray-300">Hotels</Link>
          <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
        </div>
        <div className="flex items-center">
          <input 
            type="text" 
            className="p-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" 
            placeholder="Search..." 
          />
          <button 
            className="p-2 bg-yellow-500 text-white rounded-r-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
