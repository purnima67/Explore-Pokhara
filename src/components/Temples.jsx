// Temples.jsx
import React from 'react';

const temples = [
    {
        name: 'Barahi Temple',
        description: 'Located on a small island in the middle of Fewa Lake, Barahi Temple offers a tranquil atmosphere with views of the green forest and reflections of Annapurna and Fish Tail Mountains on the lake. Major celebrations occur during Dashain in October.',
        location: 'Middle of Fewa Lake',
        features: ['Tranquil atmosphere', 'Views of Annapurna and Fish Tail Mountains', 'Dashain celebrations']
    },
    {
        name: 'Kedareswar Mandir and Miteri Park',
        description: 'A revered temple of Lord Shiva, Kedareswar Mandir is a replica of Kathmandu’s Pashupati Nath temple, situated in Komagane Miteri Park near Fewa Lake. The park commemorates the friendship between Pokhara and Komagane city in Japan and is an excellent spot to observe Nepali wedding ceremonies.',
        location: 'Near Fewa Lake',
        features: ['Replica of Pashupati Nath temple', 'Komagane Miteri Park', 'Nepali wedding ceremonies']
    },
    {
        name: 'Bindabasini Temple',
        description: 'Situated on a hillock at the north end of the old bazar, Bindabasini Temple is one of the oldest and most famous temples in Pokhara. It’s a popular site for Hindu wedding ceremonies.',
        location: 'North end of the old bazar',
        features: ['Historical significance', 'Popular wedding site']
    },
    {
        name: 'Old Bazar Area',
        description: 'A heritage site of Pokhara, the Old Bazar Area extends to the heart of the city and showcases old houses, temples, and the cultural life of the Newari people.',
        location: 'Heart of the city',
        features: ['Historical Newari bazar', 'Old houses and temples', 'Cultural activities']
    },
    {
        name: 'Bhadrakali Temple & Buddhist Monastery',
        description: 'Located in Matepani, Bhadrakali Temple and Karma Kagyu Chhonkerling Buddhist Monastery are surrounded by lush forests. This area is ideal for mountain views, bird and butterfly watching, and short hikes.',
        location: 'Matepani',
        features: ['Mountain views', 'Bird and butterfly watching', 'Religious harmony']
    },
    {
        name: 'World Peace Pagoda',
        description: 'Perched on a hilltop, the World Peace Pagoda offers breathtaking views of the Himalayan ranges, lakes, and the city. Visitors can enjoy boating and hiking, with options to visit Devi’s Fall and avoid longer walks by driving close to the pagoda.',
        location: 'Southern hill of Fewa Lake',
        features: ['Breathtaking views', 'Boating and hiking', 'Symbol of peace']
    },
    {
        name: 'Tibetan Villages',
        description: 'Since 1959, Tibetan refugees have settled in Pokhara. The Tashi Ling Tibetan Settlement near Devi’s Fall and Gupteswar Mahadev Cave, along with Tashi Palkhel and Paljor Ling in Hemja and Prithivi Chowk, offer a glimpse into Tibetan culture, including monasteries, curio shops, and carpet factories.',
        location: 'Chhorepatan, Hemja, Prithivi Chowk',
        features: ['Tibetan culture', 'Monasteries and curio shops', 'Carpet factories']
    },
    {
        name: 'Bird Watching',
        description: 'Pokhara is a paradise for bird watchers, with different types of migratory and resident birds. Popular spots include Pame, Begnas, Rupa, Raniban, Jhijhirka – Astam, Tutunga – Bachhebuduwa, and Armala.',
        location: 'Various locations',
        features: ['Wetland, woodland, and birds of prey', 'Guided bird watching tours']
    }];

const Card = ({ item }) => (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-blue-100 hover:shadow-xl transition-shadow duration-300">
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-gray-800">{item.name}</div>
            <p className="text-gray-700 text-base">{item.description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
            {item.features.map((feature, index) => (
                <span key={index} className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-800 mr-2 mb-2">
                    {feature}
                </span>
            ))}
        </div>
        <div className="px-6 pt-4 pb-2 text-sm text-gray-600">
            <span className="font-semibold">Location:</span> {item.location}
        </div>
    </div>
);

const Temples = () => (
    <div className="container mx-auto p-4 bg-gray-50">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Temples and Monuments of Pokhara</h1>
        <div className="flex flex-wrap justify-center">
            {temples.map((temple, index) => (
                <Card key={index} item={temple} />
            ))}
        </div>
    </div>
);

export default Temples;
