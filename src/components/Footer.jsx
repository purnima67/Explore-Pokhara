import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-500 to-black text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap -mx-4">
          {/* Our Mission Section */}
          <div className="w-full md:w-1/4 p-4">
            <h2 className="text-xl font-bold mb-4">Our Mission</h2>
            <p className="text-sm text-gray-300">
              Our mission is to promote Pokhara's tourism destinations globally and provide accurate information to international tourists who want to explore this beautiful city.
            </p>
          </div>
          {/* Categories Section */}
          <div className="w-full md:w-1/4 p-4">
            <h2 className="text-xl font-bold mb-4">Categories</h2>
            <ul className="text-sm text-gray-300 space-y-2">
              <li><a href="#attractions" className="hover:underline">Attractions</a></li>
              <li><a href="#activities" className="hover:underline">Activities</a></li>
              <li><a href="#security" className="hover:underline">Security</a></li>
              <li><a href="#rental" className="hover:underline">Rental</a></li>
              <li><a href="#financialhelp" className="hover:underline">Financial Help</a></li>
              <li><a href="#cuisine" className="hover:underline">Eat & Drink</a></li>
            </ul>
          </div>
          {/* Useful Links Section */}
          <div className="w-full md:w-1/4 p-4">
            <h2 className="text-xl font-bold mb-4">Useful Links</h2>
            <ul className="text-sm text-gray-300 space-y-2">
              <li><a href="https://ntb.gov.np/" target="_blank" rel="noopener noreferrer" className="hover:underline">Nepal Tourism Board</a></li>
              <li><a href="https://pokhara.immigration.gov.np/en" target="_blank" rel="noopener noreferrer" className="hover:underline">Immigration Office, Pokhara</a></li>
              <li><a href="https://pokharatourism.org.np/" target="_blank" rel="noopener noreferrer" className="hover:underline">Pokhara Tourism Council</a></li>
            </ul>
          </div>
          {/* Contact Us Section */}
          <div className="w-full md:w-1/4 p-4">
            <h2 className="text-xl font-bold mb-4">Need Help?</h2>
            <p className="text-sm text-gray-300">Phone: +123 456 7890</p>
            <p className="text-sm text-gray-300">Email: ExplorePKR@gmail.com</p>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.facebook.com/explorepkr/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-200">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
             
            </div>
          </div>
        </div>
       
        <div className="my-4 border-t border-white"></div>
        <div className="mt-4 text-center text-gray-400">
          <p>&copy; 2024 Explore Pokhara. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;