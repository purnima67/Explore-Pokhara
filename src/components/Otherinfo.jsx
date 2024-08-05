import React from 'react';

// Updated security contacts
const securityContacts = [
  {
    name: 'Tourist Police ',
    contact: '9856082761, 061452761',
    link: 'https://gandaki.nepalpolice.gov.np/about-us/tourist-police/',
  },
  {
    name: ' Tourist Information ',
    link: 'https://ntb.gov.np/en/latest-travel-updates',
  },
  {
    name: '24hr ATM',
    description: 'Locate 24hr ATMs in Pokhara.',
    link: '/bank', // Internal link to bank.jsx
  }
];

// SecurityCard component to display individual contact information
const SecurityCard = ({ contact }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-gray-800 hover:shadow-xl transition-shadow duration-300">
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2 text-white">{contact.name}</div>

      {/* Conditionally render contact details if available */}
      {contact.contact && (
        <p className="text-gray-400 text-sm">
          <span className="font-semibold">Contact:</span> {contact.contact}
        </p>
      )}

      
      {contact.link && (
        <a
          href={contact.link}
          className="text-blue-400 hover:text-blue-600"
          target={contact.link.startsWith('http') ? "_blank" : "_self"} // Open external links in new tab
          rel="noopener noreferrer"
        >
          View More
        </a>
      )}
    </div>
  </div>
);


const Otherinfo = () => (
  <div className="container mx-auto p-4 bg-gray-100">
    <h1 className="text-4xl font-bold text-center text-gray-500 mb-8">
      Other Informations
    </h1>
    <div className="flex flex-wrap justify-center">
     
      {securityContacts.map((contact, index) => (
        <SecurityCard key={index} contact={contact} />
      ))}
    </div>
  </div>
);

export default Otherinfo;
