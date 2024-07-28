import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-black py-10">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-10">Contact Us</h1>

        <div className="grid md:grid-cols-2 mb-12 text-center grid-cols-1 justify-center">
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-4 text-center md:text-left">Get In Touch</h2>
            <p className="text-lg text-gray-700 mb-2 text-center md:text-left">
              <FontAwesomeIcon icon={faPhone} /> Phone: +123 456 7890
            </p>
            <p className="text-lg text-gray-700 mb-2 text-center md:text-left">
              <FontAwesomeIcon icon={faEnvelope} /> ExplorePKR@gmail.com
            </p>
          </div>

          <div className="p-4 text-center md:ml-8">
            <h2 className="text-2xl font-bold mb-4 text-center md:text-right">Follow Us</h2>
            <div className="flex justify-center md:justify-end space-x-6">
              <a href="https://www.facebook.com/explorepkr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-500">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-500">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="https://www.youtube.com/@ExplorePokhara" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-500">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6 text-center">We're Here to Help!</h2>
          <p className="text-lg text-gray-700 text-center">
            Whether you have a question about our services, need assistance, or just want to provide feedback, we're here for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
