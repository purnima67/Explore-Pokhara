import React from 'react';
import Collaborations from './Collaborations'

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Our Mission
      </h1>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
        <p className="text-lg text-gray-700 leading-relaxed">
          Our mission is to promote Pokhara's tourism destinations globally and provide accurate information to international tourists who want to explore this beautiful city. We strive to ensure a memorable experience by showcasing the rich cultural heritage, breathtaking landscapes, and vibrant local life that Pokhara has to offer.
        </p>
      </div>
      <Collaborations />
    </div>
  );
};

export default About;
