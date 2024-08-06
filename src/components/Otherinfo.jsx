import React from 'react';
import { Link } from 'react-router-dom';
import police from '../assets/police.jpg';
import atm from '../assets/atm.jpg';
import passport from '../assets/passport.jpg';
import airplane from '../assets/airplane.jpg';

// Updated securityContacts array with the new entry
const securityContacts = [
  {
    name: 'Tourist Police',
    contact: '9856082761, 061452761',
    image: police,
    link: 'https://gandaki.nepalpolice.gov.np/about-us/tourist-police/',
  },
  {
    name: '24hr ATM',
    description: 'Locate 24hr ATMs in Pokhara.',
    image: atm,
    link: '/ATM',
  },
  {
    name: 'Visa Guide',
    image: passport,
    link: 'https://www.immigration.gov.np/en/page/tourist-visa',
  },
  {
    name: 'Access to Pokhara', // New entry
    description: 'Information on how to access Pokhara.',
    image: airplane,
    link: '/access-pokhara', // Update the link as needed
  }
];

const SecurityCard = ({ contact }) => (
  <Link
    to={contact.link}
    className="block relative overflow-hidden rounded-md shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 bg-white"
    style={{ height: '150px', width: '150px' }}
    target={contact.link.startsWith('http') ? "_blank" : "_self"}
    rel="noopener noreferrer"
  >
    <img
      src={contact.image}
      alt={`Scenic view of Pokhara during ${contact.name}`}
      className="h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-white p-2">
      <div className="text-lg font-semibold">{contact.name}</div>
      {contact.contact && (
        <p className="text-xs">
          <span className="font-semibold">Contact:</span> {contact.contact}
        </p>
      )}
      {contact.description && ( 
        <p className="text-xs mt-1 text-center">
          {contact.description}
        </p>
      )}
    </div>
  </Link>
);

const Otherinfo = () => (
  <div className="flex flex-col items-center justify-center p-8 bg-gray-100">
    <h1 className="md:text-4xl font-bold mb-6 text-gray-800 text-2xl italic">Important Information</h1>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {securityContacts.map((contact, index) => (
        <SecurityCard key={index} contact={contact} />
      ))}
    </div>
  </div>
);

export default Otherinfo;
