import React from 'react';

const activities = [
    { name: 'Tour', description: 'Explore the beautiful city of Pokhara.' },
    { name: 'Trekking', description: 'Experience the best trekking trails.' },
    { name: 'Heli Tour', description: 'Enjoy a helicopter tour over the mountains.' },
    { name: 'Mountain Biking', description: 'Bike through scenic mountain trails.' },
    { name: 'Hiking', description: 'Hike through stunning landscapes.' },
    { name: 'Sightseeing Tour', description: 'Visit popular sights and landmarks.' },
    { name: 'Paragliding', description: 'Soar high above Pokhara with paragliding.' }
];

const ActivityCard = ({ activity }) => (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4 bg-gray-800 hover:shadow-xl transition-shadow duration-300">
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-white">{activity.name}</div>
            <p className="text-gray-400 text-base mb-4">{activity.description}</p>
        </div>
    </div>
);

const Activities = () => (
    <div className="container mx-auto p-4 bg-gray-900">
        <h1 className="text-4xl font-bold text-center text-white mb-8">POPULAR ACTIVITIES AROUND POKHARA</h1>
        <p className="text-center text-gray-400 mb-8">
            Select some popular activities from below, or <a href="/all-activities" className="text-blue-400 hover:text-blue-600">view all activities available near Pokhara</a>.
        </p>
        <div className="flex flex-wrap justify-center">
            {activities.map((activity, index) => (
                <ActivityCard key={index} activity={activity} />
            ))}
        </div>
    </div>
);

export default Activities;
