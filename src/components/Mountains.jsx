// Mountains.jsx
import React from 'react';
import dhaulagiriImage from '../assets/dhaulagiri.jpg'; // Make sure to have an image named 'dhaulagiri.jpg' in the 'assets' folder

const Mountains = () => {
  return (
    <div className="p-10 bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-4">Dhaulagiri</h1>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img
            src={dhaulagiriImage}
            alt="Dhaulagiri"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
          <div className="mt-4">
            <a
              href="https://en.wikipedia.org/wiki/Dhaulagiri"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              For more :https://en.wikipedia.org/wiki/Dhaulagiri
            </a>
          </div>
        </div>
        <div className="md:w-1/2 md:pl-10 mt-4 md:mt-0">
          <p className="text-lg mb-2">
            Dhaulagiri, located in Nepal, is the seventh highest mountain in the world at 8,167 metres (26,795 ft) above sea level, and the highest mountain within the borders of a single country. It was first climbed on 13 May 1960 by a Swiss-Austrian-Nepali expedition. Annapurna I (8,091 m (26,545 ft)) is 34 km (21 mi) east of Dhaulagiri. The Kali Gandaki River flows between the two in the Kaligandaki Gorge, said to be the world's deepest. The town of Pokhara is south of the Annapurnas, an important regional center and the gateway for climbers and trekkers visiting both ranges as well as a tourist destination in its own right.
          </p>
          <div className="mt-4">
            <h2 className="text-2xl font-semibold mb-2">Highest Point</h2>
            <ul className="list-disc list-inside">
              <li><strong>Elevation:</strong> 8,167 m (26,795 ft) <span className="text-gray-500">(Ranked: 7th)</span></li>
              <li><strong>Prominence:</strong> 3,357 m (11,014 ft) <span className="text-gray-500">(Ranked: 55th)</span></li>
              <li><strong>Parent peak:</strong> Dhaulagiri</li>
              <li><strong>Listing:</strong> Eight-thousander, Ultra</li>
              <li><strong>Coordinates:</strong> 28°41′54″N 83°29′15″E</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mountains;
