import React from 'react';


import ptc from '../assets/ptc (1).jpg';
import nic from '../assets/nic.jpg';
import devpkr from '../assets/devpkr (1).jpg';
import emstreks from '../assets/emstreks.jpg';

const Collaborations = () => {
  return (
    <div className="flex flex-col items-center p-4 bg-gray-100">
      <h1 className="text-xl font-semibold ">Our Collaboration Team</h1>
      <hr className="w-1/2 border-t-2 border-gray-300 mb-6" />

      <div className="flex justify-center flex-wrap">
        <div className="m-2 text-center sm:m-4 lg:m-6">
          <img src={ptc} alt="Pokhara Tourism Council" className="h-24 mx-auto sm:w-28 lg:w-32" />
        </div>
        <div className="m-2 text-center sm:m-4 lg:m-6">
          <img src={nic} alt="NIC" className="h-24 mx-auto sm:w-32 lg:w-48 lg:ml-8" />
        </div>
        <div className="m-2 text-center sm:m-4 lg:m-6">
          <img src={devpkr} alt="Developers Community" className="h-24 mx-auto sm:w-32 lg:w-38 lg:ml-8" />
        </div>
        <div className="m-2 text-center sm:m-4 lg:m-6">
          <img src={emstreks} alt="Ems Treks" className="h-24 mx-auto sm:w-32 lg:w-32 lg:ml-8" />
        </div>
      </div>
    </div>
  );
};

export default Collaborations;