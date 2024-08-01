// Yoga.jsx
import React from 'react';

const yogaRetreats = [
    {
        name: 'Purna Yoga Retreat',
        link: 'https://www.purnayoga.com.np/',
        description: 'A holistic yoga retreat offering various yoga and meditation programs.'
    },
    {
        name: 'Green Hills Yoga Retreat',
        link: 'https://greenhillsyogaretreatpokhara.com/',
        description: 'Located amidst nature, offering a peaceful environment for yoga and relaxation.'
    },
    {
        name: 'Mukti Yoga Retreat',
        link: 'https://muktiyogaretreat.com/',
        description: 'A retreat that combines yoga with spiritual teachings and meditation.'
    },
    {
        name: 'Green Hills Guest House',
        link: 'http://greenhillsguesthousepokhara.com/',
        description: 'A guest house offering yoga retreats and a serene stay in Pokhara.'
    },
    {
        name: 'Sadhana Yoga Retreat',
        link: 'https://www.sadhanayogaretreat.com/',
        description: 'Offers yoga retreats focusing on health and well-being in a beautiful setting.'
    }
];

const Card = ({ item }) => (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-blue-100 hover:shadow-xl transition-shadow duration-300">
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-gray-800">{item.name}</div>
            <p className="text-gray-700 text-base">{item.description}</p>
        </div>
        <div className="px-6 pt-4 pb-2 text-sm text-gray-600">
            <a href={item.link} className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">Visit Website</a>
        </div>
    </div>
);

const Yoga = () => (
    <div className="container mx-auto p-4 bg-gray-50">
        <h1 className="text-4xl font-bold text-center text-gray-900 my-8">Yoga Retreat Centers</h1>
        <div className="flex flex-wrap justify-center">
            {yogaRetreats.map((retreat, index) => (
                <Card key={index} item={retreat} />
            ))}
        </div>
    </div>
);

export default Yoga;
