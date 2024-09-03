
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isThingsToDoDropdownOpen, setIsThingsToDoDropdownOpen] = useState(false);
  const [isAdventureDropdownOpen, setIsAdventureDropdownOpen] = useState(false);
  const [isTouristAttractionsDropdownOpen, setIsTouristAttractionsDropdownOpen] = useState(false);
  const [isCommunityDropdownOpen, setIsCommunityDropdownOpen] = useState(false);
  const [isEthnicDropdownOpen, setIsEthnicDropdownOpen] = useState(false);
  const [isEventsDropdownOpen, setIsEventsDropdownOpen] = useState(false);

  const [isTrailRaceDropdownOpen, setTrailRaceDropdownOpen] = useState(false);
  const [isOthersDropdownOpen, setOthersDropdownOpen] = useState(false);
  const [isEatandDrinkDropdownOpen, setEatandDrinkDropdownOpen] = useState(false);

  const thingsToDoRef = useRef(null);
  const adventureRef = useRef(null);
  const touristAttractionsRef = useRef(null);
  const communityRef = useRef(null);
  const ethnicRef = useRef(null);
  const eventsRef = useRef(null);
  const trailRace = useRef(null);
  const others = useRef(null);
  const EatandDrinkRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const toggleThingsToDoDropdown = () => {
    setIsThingsToDoDropdownOpen(!isThingsToDoDropdownOpen);
  };

  const toggleAdventureDropdown = () => {
    setIsAdventureDropdownOpen(!isAdventureDropdownOpen);
  };

  const toggleTouristAttractionsDropdown = () => {
    setIsTouristAttractionsDropdownOpen(!isTouristAttractionsDropdownOpen);
  };

  const toggleCommunityDropdown = () => {
    setIsCommunityDropdownOpen(!isCommunityDropdownOpen);
  };

  const toggleEthnicDropdown = () => {
    setIsEthnicDropdownOpen(!isEthnicDropdownOpen);
  };

  const toggleEventsDropdown = () => {
    setIsEventsDropdownOpen(!isEventsDropdownOpen);
  };

  const toggleTrailRaceDropdown = () => {
    setTrailRaceDropdownOpen(!isTrailRaceDropdownOpen);
  };

  const toggleOthersDropdown = () => {
    setOthersDropdownOpen(!isOthersDropdownOpen);
  };

  const toggleEatandDrinkDropdown = () => {
    setEatandDrinkDropdownOpen(!isEatandDrinkDropdownOpen);
  };
  

  const handleClickOutside = (event) => {
    if (thingsToDoRef.current && !thingsToDoRef.current.contains(event.target)) {
      setIsThingsToDoDropdownOpen(false);
    }
    if (adventureRef.current && !adventureRef.current.contains(event.target)) {
      setIsAdventureDropdownOpen(false);
    }
    if (touristAttractionsRef.current && !touristAttractionsRef.current.contains(event.target)) {
      setIsTouristAttractionsDropdownOpen(false);
    }
    if (communityRef.current && !communityRef.current.contains(event.target)) {
      setIsCommunityDropdownOpen(false);
    }
    if (ethnicRef.current && !ethnicRef.current.contains(event.target)) {
      setIsEthnicDropdownOpen(false);
    }
    if (eventsRef.current && !eventsRef.current.contains(event.target)) {
      setIsEventsDropdownOpen(false);
    }
    if (EatandDrinkRef.current && !EatandDrinkRef.current.contains(event.target)) {
      setEatandDrinkDropdownOpen(false);
    }
  };
  const toggleDropdown = (dropdown) => {
    setIsThingsToDoDropdownOpen(dropdown === 'thingsToDo');
    setIsAdventureDropdownOpen(dropdown === 'adventure');
    setIsTouristAttractionsDropdownOpen(dropdown === 'touristAttractions');
    setIsCommunityDropdownOpen(dropdown === 'community');
    setIsEthnicDropdownOpen(dropdown === 'ethnic');
    setIsEventsDropdownOpen(dropdown === 'events');
    setTrailRaceDropdownOpen(dropdown === 'trailRace');
    setOthersDropdownOpen(dropdown === 'others');
    setEatandDrinkDropdownOpen(dropdown === 'eatAndDrink');
  };
  const handleThingsToDoMouseEnter = () => {
    setIsTouristAttractionsDropdownOpen(false); // Close the Tourist Attractions dropdown
    toggleThingsToDoDropdown(); 
    setIsCommunityDropdownOpen(false);
    setIsEventsDropdownOpen(false);
    setEatandDrinkDropdownOpen(false);// Open or close the Things to Do dropdown
  };
  const handleTouristAttractionsMouseEnter = () =>{
    toggleTouristAttractionsDropdown();
    setIsThingsToDoDropdownOpen(false); 
    setIsCommunityDropdownOpen(false);
    setIsEventsDropdownOpen(false);
    setEatandDrinkDropdownOpen(false);

  };
  const handleEatandDrinkMouseEnter =() =>{
    setIsTouristAttractionsDropdownOpen(false); // Close the Tourist Attractions dropdown
    setIsThingsToDoDropdownOpen(false); 
    setIsCommunityDropdownOpen(false);
    setIsEventsDropdownOpen(false);
    toggleEatandDrinkDropdown();
  };
  const communityMouseEnter =() =>{
    setIsTouristAttractionsDropdownOpen(false); // Close the Tourist Attractions dropdown
    setIsThingsToDoDropdownOpen(false); 
    toggleCommunityDropdown();
    setIsEventsDropdownOpen(false);
    setEatandDrinkDropdownOpen(false);
   
  };
  const handleEventsMouseEnter =() => {
    setIsTouristAttractionsDropdownOpen(false); // Close the Tourist Attractions dropdown
    setIsThingsToDoDropdownOpen(false); 
   setIsCommunityDropdownOpen(false);
    toggleEventsDropdown();
    setEatandDrinkDropdownOpen(false);
  };
 

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gradient-to-r from-gray-500 to-black p-2 shadow-md ">
      <div className="container mx-auto flex justify-between items-center h-[3rem]">
        <div className="text-white text-2xl font-bold">
        <Link to="/" className="text-white hover:text-gray-300">Explore Pokhara</Link>
        
         </div>

        
        <div className="block lg:hidden">
          <button onClick={toggleSidebar} className="text-white focus:outline-none">
            <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
          </button>
        </div>

       
        <div className="hidden lg:flex space-x-6 mr-16">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
        
         
          {/* Things to do dropdown */}
<div className="relative" ref={thingsToDoRef}  >
<button onClick={() => toggleDropdown('thingsToDo')} onMouseOver={ handleThingsToDoMouseEnter} className="text-white hover:text-gray-300 flex items-center">
  Things to do <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
</button>
  {isThingsToDoDropdownOpen && (
    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
      <Link to="/Boating"  onClick={() => setIsThingsToDoDropdownOpen(false)} className="block px-4 py-2 text-black hover:bg-gray-100">Boating</Link>
      <Link to="/ThingsToDo/Hiking"  onClick={() => setIsThingsToDoDropdownOpen(false)} className="block px-4 py-2 text-black hover:bg-gray-100">Hiking</Link>
      <Link to="/ThingsToDo/Cycling" onClick={() => setIsThingsToDoDropdownOpen(false)} className="block px-4 py-2 text-black hover:bg-gray-100">Cycling</Link>
      <div className="relative" onClick={() => setIsThingsToDoDropdownOpen(false)} ref={adventureRef} onMouseEnter={toggleAdventureDropdown} onMouseLeave={() => setIsAdventureDropdownOpen(false)}>
        <button className="w-full text-left text-black hover:bg-gray-100 p-2 rounded flex items-center">
          Adventure <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
        </button>
        {isAdventureDropdownOpen && (
          <div className="pl-4">
            <Link to="ThingsToDo/Adventure/Paragliding" onClick={() => setIsThingsToDoDropdownOpen(false)} className="block px-4 py-2 text-black hover:bg-gray-100">Paragliding</Link>
            <Link to="ThingsToDo/Bunjee" onClick={() => setIsThingsToDoDropdownOpen(false)} className="block px-4 py-2 text-black hover:bg-gray-100">Bungee Jump</Link>
            <Link to="ThingsToDo/ZipFlyer" onClick={() => setIsThingsToDoDropdownOpen(false)} className="block px-4 py-2 text-black hover:bg-gray-100">Zip Flyer</Link>
          </div>
        )}
      </div>
    </div>
  )}
</div>


        
          <div className="relative" ref={touristAttractionsRef}  >
          <button onClick={() => toggleDropdown('touristAttractions')}  onMouseOver={handleTouristAttractionsMouseEnter } className="text-white hover:text-gray-300 flex items-center">
  Tourist Attractions <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
</button>
            {isTouristAttractionsDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                <Link to="/TouristAttractions/Temples" onClick={() => setIsTouristAttractionsDropdownOpen(false)} className="block px-4 py-2 text-black hover:bg-gray-100">Temples & Monuments</Link>
                <Link to="/TouristAttractions/Caves"  onClick={() => setIsTouristAttractionsDropdownOpen(false)} className="block px-4 py-2 text-black hover:bg-gray-100">Caves</Link>
                <Link to="/TouristAttractions/Lakes"  onClick={() => setIsTouristAttractionsDropdownOpen(false)} className="block px-4 py-2 text-black hover:bg-gray-100">Lakes</Link>
                <Link to="/TouristAttractions/Homestay"  onClick={() => setIsTouristAttractionsDropdownOpen(false)} className="block px-4 py-2 text-black hover:bg-gray-100">Homestay</Link>
                <Link to="/TouristAttractions/Yoga"  onClick={() => setIsTouristAttractionsDropdownOpen(false)} className="block px-4 py-2 text-black hover:bg-gray-100">Yoga Retreat</Link>
              </div>
            )}
          </div>

         
          <div className="relative" ref={communityRef}>
            <button onClick={toggleCommunityDropdown} onMouseEnter = { communityMouseEnter} className="text-white hover:text-gray-300 flex items-center">
              Community Festival <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
            </button>
            {isCommunityDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                <Link to="/CommunityFestival/Street" onClick={() => setIsCommunityDropdownOpen(false)} className="block px-4 py-2 text-black hover:bg-gray-100">Street Festival</Link>
                <Link to="/Festival/FewaFestival" onClick={() => setIsCommunityDropdownOpen(false)} className="block px-4 py-2 text-black hover:bg-gray-100">Fewa Festival</Link>
                <Link to="/Festival/FalguPurnima" onClick={() => setIsCommunityDropdownOpen(false)} className="block px-4 py-2 text-black hover:bg-gray-100">Falgu Purnima</Link>
                <Link to="/Festival/RicePlantation" onClick={() => setIsCommunityDropdownOpen(false)} className="block px-4 py-2 text-black hover:bg-gray-100">Rice Plantation</Link>
                <Link to="/Festival/Ethincs/Culture" onClick={() => setIsCommunityDropdownOpen(false)} className="block px-4 py-2 text-black hover:bg-gray-100">Ethnics/Culture</Link>
              </div>
            )}
          </div>
         
         
          <div className="relative" ref={eventsRef}>
  <button onClick={toggleEventsDropdown} onMouseOver={handleEventsMouseEnter} 
   className="text-white hover:text-gray-300 flex items-center">
    Events <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
  </button>
  {isEventsDropdownOpen && (
    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
      {/* Trail Race Submenu */}
      <div className="relative">
        <button onClick={toggleTrailRaceDropdown} className="w-full text-left text-black hover:bg-gray-100 p-2 rounded flex items-center">
          Trail Race <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
        </button>
        {isTrailRaceDropdownOpen && (
          <div className="pl-4">
            <Link to="/Events/TrailRace/FishtailRace" onClick={() => setEatandDrinkDropdownOpen(false)} className="block text-black hover:bg-gray-100 p-2 rounded">Fishtail Race</Link>
            <Link to="/Events/TrailRace/PanchaseUltraRace"  onClick={() => setEatandDrinkDropdownOpen(false)} className="block text-black hover:bg-gray-100 p-2 rounded">Panchase Ultra Race</Link>
          </div>
        )}
      </div>

      <Link to="/Events/PokharaMarathon"   onClick={() => setEatandDrinkDropdownOpen(false)} className="block px-4 py-2 text-black hover:bg-gray-100">Pokhara Marathon</Link>
      <Link to="/Events/MusicalEvents"  onClick={() => setEatandDrinkDropdownOpen(false)}  className="block px-4 py-2 text-black hover:bg-gray-100">Musical Events</Link>


      {/* Others Submenu */}
      <div className="relative">
        <button onClick={toggleOthersDropdown}  className="w-full text-left text-black hover:bg-gray-100 p-2 rounded flex items-center">
          Others <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
        </button>
        {isOthersDropdownOpen && (
          <div className="pl-4">
            <Link to="/Events/Others/DevelopersMeet"   onClick={() => setIsEventsDropdownOpen(false)} className="block text-black hover:bg-gray-100 p-2 rounded">Developers Meet</Link>
            <Link to="/Events/Others/HikersClubNepal"  onClick={() => setIsEventsDropdownOpen(false)} className="block text-black hover:bg-gray-100 p-2 rounded">HikersClubNepal</Link>
            <Link to="/Events/Others/Thrifting"  onClick={() => setIsEventsDropdownOpen(false)} className="block text-black hover:bg-gray-100 p-2 rounded">Thrifting</Link>
          </div>
        )}
      </div>
    </div>
  )}
</div>

         {/* Eat & Drink Dropdown */}
<div className="relative" ref={EatandDrinkRef}>
  <button onClick={toggleEatandDrinkDropdown} onMouseEnter ={ handleEatandDrinkMouseEnter} className="text-white hover:text-gray-300 flex items-center">
    Eat & Drink <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
  </button>
  {isEatandDrinkDropdownOpen && (
    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
      <Link to="/EatDrink/LocalSpecialities"  onClick={() => setEatandDrinkDropdownOpen(false)} className="block px-4 py-2 text-black hover:bg-gray-100">
        Local Specialities
      </Link>
      <Link to="/EatDrink/FishCuisine" onClick={() => setEatandDrinkDropdownOpen(false)} className="block px-4 py-2 text-black hover:bg-gray-100">
        Fish Cuisine
      </Link>
      <Link to="/EatDrink/BarsAndPubs" onClick={() => setEatandDrinkDropdownOpen(false)} className="block px-4 py-2 text-black hover:bg-gray-100">
        Bars and Pubs
      </Link>
      <Link to="/EatDrink/Restaurants" onClick={() => setEatandDrinkDropdownOpen(false)} className="block px-4 py-2 text-black hover:bg-gray-100">
        Restaurants
      </Link>
      <Link to="/EatDrink/Cafes" onClick={() => setEatandDrinkDropdownOpen(false)} className="block px-4 py-2 text-black hover:bg-gray-100">
        Cafes
      </Link>
    </div>
  )}
</div>

        </div>
      </div>
    

      {/* Mobile sidebar */}
      {isSidebarOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={closeSidebar}></div>
          <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-md z-20">
            <div className="flex justify-between items-center p-4">
              <div className="text-2xl font-bold">Explore Pokhara</div>
              <button onClick={closeSidebar} className="text-black focus:outline-none">
                <FontAwesomeIcon icon={faTimes} className="h-6 w-6" />
              </button>
            </div>
            <nav className="px-4 py-2 space-y-2">
              <Link to="/" className="block text-black hover:bg-gray-100 p-2 rounded"  onClick={closeSidebar} >Home</Link>

              {/* Mobile Things to do dropdown */}
              <div className="relative" ref={thingsToDoRef}>
                <button onClick={toggleThingsToDoDropdown} className="w-full text-left text-black hover:bg-gray-100 p-2 rounded flex items-center">
                  Things to do <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
                </button>
                {isThingsToDoDropdownOpen && (
                  <div className="pl-4">
                    <Link to="/Boating" onClick={closeSidebar} className="block text-black hover:bg-gray-100 p-2 rounded">Boating</Link>
                    <Link to="/ThingsToDo/Hiking" onClick={closeSidebar} className="block text-black hover:bg-gray-100 p-2 rounded">Hiking</Link>
                    <Link to="/ThingsToDo/Cycling" onClick={closeSidebar} className="block text-black hover:bg-gray-100 p-2 rounded">Cycling</Link>
                    <div className="relative" ref={adventureRef}>
                      <button onClick={toggleAdventureDropdown} className="w-full text-left text-black hover:bg-gray-100 p-2 rounded flex items-center">
                        Adventure <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
                      </button>
                      {isAdventureDropdownOpen && (
                        <div className="pl-4">
                          <Link to="/ThingsToDo/Adventure/Paragliding" onClick={closeSidebar} className="block text-black hover:bg-gray-100 p-2 rounded">Paragliding</Link>
                          <Link to="/ThingsToDo/BungeeJump" onClick={closeSidebar} className="block text-black hover:bg-gray-100 p-2 rounded">Bungee Jump</Link>
                          <Link to="/ThingsToDo/ZipFlyer" onClick={closeSidebar} className="block text-black hover:bg-gray-100 p-2 rounded">Zip Flyer</Link>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile Tourist Attractions dropdown */}

              <div className="relative" ref={touristAttractionsRef}>
                <button onClick={toggleTouristAttractionsDropdown} className="w-full text-left text-black hover:bg-gray-100 p-2 rounded flex items-center">
                  Tourist Attractions <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
                </button>
                {isTouristAttractionsDropdownOpen && (
                  <div className="pl-4">
                    <Link to="/TouristAttractions/Temples" onClick={closeSidebar} className="block text-black hover:bg-gray-100 p-2 rounded">Temples & Monuments</Link>
                    <Link to="/TouristAttractions/Caves" onClick={closeSidebar} className="block text-black hover:bg-gray-100 p-2 rounded">Caves</Link>
                    <Link to="/TouristAttractions/Lakes" onClick={closeSidebar} className="block text-black hover:bg-gray-100 p-2 rounded">Lakes</Link>
                    <Link to="/TouristAttractions/Homestay" onClick={closeSidebar} className="block text-black hover:bg-gray-100 p-2 rounded">Homestay</Link>
                    <Link to="/TouristAttractions/Yoga" onClick={closeSidebar} className="block text-black hover:bg-gray-100 p-2 rounded">Yoga Retreat</Link>
                  </div>
                )}
              </div>

              {/* Mobile Community Festival dropdown */}
              <div className="relative" ref={communityRef}>
                <button onClick={toggleCommunityDropdown}  className="w-full text-left text-black hover:bg-gray-100 p-2 rounded flex items-center">
                  Community Festival <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
                </button>
                {isCommunityDropdownOpen && (
                  <div className="pl-4">
                    <Link to="/CommunityFestival/Street" onClick={closeSidebar} className="block text-black hover:bg-gray-100 p-2 rounded">Street Festival</Link>
                    <Link to="/Festival/FewaFestival" onClick={closeSidebar} className="block text-black hover:bg-gray-100 p-2 rounded">Fewa Festival</Link>
                    <Link to="/Festival/FalguPurnima" onClick={closeSidebar} className="block text-black hover:bg-gray-100 p-2 rounded">Falgu Purnima</Link>
                    <Link to="/Festival/RicePlantation" onClick={closeSidebar} className="block text-black hover:bg-gray-100 p-2 rounded">Rice Plantation</Link>
                    <Link to="/Festival/Cultures/Ethnics" onClick={closeSidebar} className="block text-black hover:bg-gray-100 p-2 rounded">Cultures/Ethnics</Link>
                    
                  </div>
                )}
              </div>
               {/* Mobile Tourist Attractions dropdown */}
               <div className="relative" ref={eventsRef}>
  <button onClick={toggleEventsDropdown}  className="w-full text-left text-black hover:bg-gray-100 p-2 rounded flex items-center">
    Events <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
  </button>
  {isEventsDropdownOpen && (
    <div className="pl-4">
      {/* Trail Race Submenu */}
      <div className="relative">
        <button onClick={toggleTrailRaceDropdown} className="block text-black hover:bg-gray-100  items-center">
          Trail Race <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
        </button>
        {isTrailRaceDropdownOpen && (
          <div className="pl-4">
            <Link to="/Events/TrailRace/FishtailRace" onClick={closeSidebar} className="block text-black hover:bg-gray-100">Fishtail Race</Link>
            <Link to="/Events/TrailRace/PanchaseUltraRace" onClick={closeSidebar}  className="block text-black hover:bg-gray-100">Panchase Ultra Race</Link>
          </div>
        )}
      </div>

      <Link to="/Events/PokharaMarathon" onClick={closeSidebar} className="block text-black hover:bg-gray-100 p-2 rounded">Pokhara Marathon</Link>
      <Link to="/Events/MusicalEvents"  onClick={closeSidebar} className="block text-black hover:bg-gray-100 p-2 rounded">Musical Events</Link>

      <div className="relative">
        <button onClick={toggleOthersDropdown}   className="block text-black hover:bg-gray-100  items-center">
          Others <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
        </button>
        {isOthersDropdownOpen && (
          <div className="pl-4">
            <Link to="/Events/Others/DevelopersMeet" onClick={closeSidebar} className="block text-black hover:bg-gray-100">Developers Meet</Link>
            <Link to="/Events/Others/HikersClubNepal"onClick={closeSidebar} className="block text-black hover:bg-gray-100">Hikers Club Nepal</Link>
            <Link to="/Events/Others/Thrifting" onClick={closeSidebar} className="block text-black hover:bg-gray-100">Thrifting</Link>
          </div>
        )}
      </div>
    </div>
  )}
</div>

<div className="relative" ref={EatandDrinkRef}>
  <button
    onClick={toggleEatandDrinkDropdown}
    className="w-full text-left text-black hover:bg-gray-100 p-2 rounded flex items-center"
  >
    Eat & Drink <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
  </button>
  {isEatandDrinkDropdownOpen && (
    <div className="pl-4">
      <Link to="/EatDrink/LocalSpecialities"  onClick={closeSidebar} className="block text-black hover:bg-gray-100 p-2 rounded">
        Local Specialities
      </Link>
      <Link to="/EatDrink/FishCuisine"  onClick={closeSidebar} className="block text-black hover:bg-gray-100 p-2 rounded">
        Fish Cuisine
      </Link>
      <Link to="/EatDrink/BarsAndPubs"  onClick={closeSidebar} className="block text-black hover:bg-gray-100 p-2 rounded">
        Bars and Pubs
      </Link>
      <Link to="/EatDrink/Restaurants"  onClick={closeSidebar} className="block text-black hover:bg-gray-100 p-2 rounded">
        Restaurants
      </Link>
      <Link to="/EatDrink/Cafes" onClick={closeSidebar} className="block text-black hover:bg-gray-100 p-2 rounded">
        Cafes
      </Link>
    </div>
  )}
</div>

            </nav>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 