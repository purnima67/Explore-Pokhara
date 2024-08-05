// ATM.jsx
import React from 'react';

const ATM = () => {
  return (
    <div className="container mx-auto p-4 bg-gray-100">
      <h1 className="text-4xl font-bold text-center text-gray-500 mb-8">
        24hr ATMs in Pokhara
      </h1>
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-6">
        <p className="text-gray-700 mb-4">
          Pokhara offers several 24-hour ATMs to cater to the needs of locals and tourists alike. Here are a few locations where you can find ATMs that are operational round the clock:
        </p>
        <ul className="list-disc pl-5 text-gray-700">
          <li>ATM 1: Location details</li>
          <li>ATM 2: Location details</li>
          <li>ATM 3: Location details</li>
        </ul>
      </div>
    </div>
  );
};

export default ATM;