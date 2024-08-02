// import React from 'react';

// const securityContacts = [
//     {
//         name: 'Tourist Police Pokhara',
//         contact: '9856082761, 061452761',
//         email: 'touristpolicepokhara@nepalpolice.gov.np',
//         location: 'Pokhara-17 (Damside), Kaski',
//         link: 'https://gandaki.nepalpolice.gov.np/about-us/tourist-police/',
//         description: 'For assistance and safety concerns of tourists in Pokhara.'
//     },
//     {
//         name: 'Tourist Police Department',
//         link: 'https://www.tourism.gov.np/pages/tourist-police/9',
//         description: 'Official website for tourist police information and services in Nepal.'
//     }
// ];

// const SecurityCard = ({ contact }) => (
//     <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-gray-800 hover:shadow-xl transition-shadow duration-300">
//         <div className="px-6 py-4">
//             <div className="font-bold text-xl mb-2 text-white">{contact.name}</div>
//             <p className="text-gray-400 text-base mb-4">{contact.description}</p>
//             {contact.contact && (
//                 <p className="text-gray-400 text-sm">
//                     <span className="font-semibold">Contact:</span> {contact.contact}
//                 </p>
//             )}
//             {contact.email && (
//                 <p className="text-gray-400 text-sm">
//                     <span className="font-semibold">Email:</span> <a href={`mailto:${contact.email}`} className="text-blue-400 hover:text-blue-600">{contact.email}</a>
//                 </p>
//             )}
//             {contact.location && (
//                 <p className="text-gray-400 text-sm">
//                     <span className="font-semibold">Location:</span> {contact.location}
//                 </p>
//             )}
//             {contact.link && (
//                 <a href={contact.link} className="text-blue-400 hover:text-blue-600" target="_blank" rel="noopener noreferrer">View More</a>
//             )}
//         </div>
//     </div>
// );

// const Security = () => (
//     <div className="container mx-auto p-4 bg-gray-100">
//         <h1 className="text-4xl font-bold text-center text-gray-500 mb-8">Security Information</h1>
//         <div className="flex flex-wrap justify-center">
//             {securityContacts.map((contact, index) => (
//                 <SecurityCard key={index} contact={contact} />
//             ))}
//         </div>
//     </div>
// );

// export default Security;