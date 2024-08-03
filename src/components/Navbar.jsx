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

  const thingsToDoRef = useRef(null);
  const adventureRef = useRef(null);
  const touristAttractionsRef = useRef(null);
  const communityRef = useRef(null);
  const ethnicRef = useRef(null);
  const eventsRef = useRef(null);

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
  }


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
    if (eventsRef.current && !eventsRef.current.contains(event.target)){
      setIsEventsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gradient-to-r from-gray-500 to-black p-2 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Explore Pokhara</div>

        {/* Mobile menu toggle button */}
        <div className="block lg:hidden">
          <button onClick={toggleSidebar} className="text-white focus:outline-none">
            <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:flex space-x-6 mr-16">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>

          {/* Things to do dropdown */}
          <div className="relative" ref={thingsToDoRef}>
            <button onClick={toggleThingsToDoDropdown} className="text-white hover:text-gray-300 flex items-center">
              Things to do <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
            </button>
            {isThingsToDoDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                <Link to="/ThingsToDo/Boating" className="block px-4 py-2 text-black hover:bg-gray-100">Boating</Link>
                <Link to="/ThingsToDo/Hiking" className="block px-4 py-2 text-black hover:bg-gray-100">Hiking</Link>
                <Link to="/ThingsToDo/Cycling" className="block px-4 py-2 text-black hover:bg-gray-100">Cycling</Link>
                <div className="relative" ref={adventureRef}>
                  <button onClick={toggleAdventureDropdown} className="w-full text-left text-black hover:bg-gray-100 p-2 rounded flex items-center">
                    Adventure <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
                  </button>
                  {isAdventureDropdownOpen && (
                    <div className="pl-4">
                      <Link to="ThingsToDo/Adventure/Paragliding" className="block px-4 py-2 text-black hover:bg-gray-100">Paragliding</Link>
                      <Link to="ThingsToDo/Adventure/BungeeJump" className="block px-4 py-2 text-black hover:bg-gray-100">Bungee Jump</Link>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Tourist Attractions dropdown */}
          <div className="relative" ref={touristAttractionsRef}>
            <button onClick={toggleTouristAttractionsDropdown} className="text-white hover:text-gray-300 flex items-center">
              Tourist Attractions <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
            </button>
            {isTouristAttractionsDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                <Link to="/TouristAttractions/Temples" className="block px-4 py-2 text-black hover:bg-gray-100">Temples</Link>
                <Link to="/TouristAttractions/Caves" className="block px-4 py-2 text-black hover:bg-gray-100">Caves</Link>
                <Link to="/TouristAttractions/Lakes" className="block px-4 py-2 text-black hover:bg-gray-100">Lakes</Link>
                <Link to="/TouristAttractions/Homestay" className="block px-4 py-2 text-black hover:bg-gray-100">Homestay</Link>
                <Link to="/TouristAttractions/Yoga" className="block px-4 py-2 text-black hover:bg-gray-100">Yoga Retreat</Link>
              </div>
            )}
          </div>

          {/* Community Festival dropdown */}
          <div className="relative" ref={communityRef}>
            <button onClick={toggleCommunityDropdown} className="text-white hover:text-gray-300 flex items-center">
              Community Festival <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
            </button>
            {isCommunityDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                <Link to="/Festival/StreetFestival" className="block px-4 py-2 text-black hover:bg-gray-100">Street Festival</Link>
                <Link to="/Festival/FewaFestival" className="block px-4 py-2 text-black hover:bg-gray-100">Fewa Festival</Link>
                <Link to="/Festival/FalguPurnima" className="block px-4 py-2 text-black hover:bg-gray-100">Falgu Purnima</Link>
                <Link to="/Festival/RicePlantation" className="block px-4 py-2 text-black hover:bg-gray-100">Rice Plantation</Link>
                <div className="relative" ref={ethnicRef}>
                  <button onClick={toggleEthnicDropdown} className="w-full text-left text-black hover:bg-gray-100 p-2 rounded flex items-center">
                    Ethnics/Cultural <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
                  </button>
                  {isEthnicDropdownOpen && (
                    <div className="pl-4">
                      <Link to="/Ethnic/Newar" className="block px-4 py-2 text-black hover:bg-gray-100">Newar</Link>
                      <Link to="/Ethnic/Gurung" className="block px-4 py-2 text-black hover:bg-gray-100">Gurung</Link>
                      <Link to="/Ethnic/Rai" className="block px-4 py-2 text-black hover:bg-gray-100">Rai</Link>
                      <Link to="/Ethnic/Magar" className="block px-4 py-2 text-black hover:bg-gray-100">Magar</Link>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
         
          {/* Tourist Attractions dropdown */}
          <div className="relative" ref={eventsRef}>
            <button onClick={toggleEventsDropdown} className="text-white hover:text-gray-300 flex items-center">
             Events<FontAwesomeIcon icon={faCaretDown} className="ml-1" />
            </button>
            {isEventsDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                <Link to="/Events/MusicFestival" className="block px-4 py-2 text-black hover:bg-gray-100">MusicFestival</Link>
                <Link to="/Events/CulturalExhibition" className="block px-4 py-2 text-black hover:bg-gray-100">Cultural Exhibition</Link>
                <Link to="/Events/Sports" className="block px-4 py-2 text-black hover:bg-gray-100">Sports</Link>
                <Link to="/Events/Workshops" className="block px-4 py-2 text-black hover:bg-gray-100">Workshops</Link>
               
              </div>
            )}
          </div>
          <Link to="/EatDrink" className="text-white hover:text-gray-300">Eat & Drink</Link>
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
              <Link to="/" className="block text-black hover:bg-gray-100 p-2 rounded">Home</Link>

              {/* Mobile Things to do dropdown */}
              <div className="relative" ref={thingsToDoRef}>
                <button onClick={toggleThingsToDoDropdown} className="w-full text-left text-black hover:bg-gray-100 p-2 rounded flex items-center">
                  Things to do <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
                </button>
                {isThingsToDoDropdownOpen && (
                  <div className="pl-4">
                    <Link to="/ThingsToDo/Boating" className="block text-black hover:bg-gray-100 p-2 rounded">Boating</Link>
                    <Link to="/ThingsToDo/Hiking" className="block text-black hover:bg-gray-100 p-2 rounded">Hiking</Link>
                    <Link to="/ThingsToDo/Cycling" className="block text-black hover:bg-gray-100 p-2 rounded">Cycling</Link>
                    <div className="relative" ref={adventureRef}>
                      <button onClick={toggleAdventureDropdown} className="w-full text-left text-black hover:bg-gray-100 p-2 rounded flex items-center">
                        Adventure <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
                      </button>
                      {isAdventureDropdownOpen && (
                        <div className="pl-4">
                          <Link to="/ThingsToDo/Adventure/Paragliding" className="block text-black hover:bg-gray-100 p-2 rounded">Paragliding</Link>
                          <Link to="/ThingsToDo/Adventure/BungeeJump" className="block text-black hover:bg-gray-100 p-2 rounded">Bungee Jump</Link>
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
                    <Link to="/TouristAttractions/Temples" className="block text-black hover:bg-gray-100 p-2 rounded">Temples</Link>
                    <Link to="/TouristAttractions/Caves" className="block text-black hover:bg-gray-100 p-2 rounded">Caves</Link>
                    <Link to="/TouristAttractions/Lakes" className="block text-black hover:bg-gray-100 p-2 rounded">Lakes</Link>
                    <Link to="/TouristAttractions/Homestay" className="block text-black hover:bg-gray-100 p-2 rounded">Homestay</Link>
                    <Link to="/TouristAttractions/Yoga" className="block text-black hover:bg-gray-100 p-2 rounded">Yoga Retreat</Link>
                  </div>
                )}
              </div>

              {/* Mobile Community Festival dropdown */}
              <div className="relative" ref={communityRef}>
                <button onClick={toggleCommunityDropdown} className="w-full text-left text-black hover:bg-gray-100 p-2 rounded flex items-center">
                  Community Festival <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
                </button>
                {isCommunityDropdownOpen && (
                  <div className="pl-4">
                    <Link to="/Festival/StreetFestival" className="block text-black hover:bg-gray-100 p-2 rounded">Street Festival</Link>
                    <Link to="/Festival/FewaFestival" className="block text-black hover:bg-gray-100 p-2 rounded">Fewa Festival</Link>
                    <Link to="/Festival/FalguPurnima" className="block text-black hover:bg-gray-100 p-2 rounded">Falgu Purnima</Link>
                    <Link to="/Festival/RicePlantation" className="block text-black hover:bg-gray-100 p-2 rounded">Rice Plantation</Link>
                    <div className="relative" ref={ethnicRef}>
                      <button onClick={toggleEthnicDropdown} className="w-full text-left text-black hover:bg-gray-100 p-2 rounded flex items-center">
                        Ethnics/Cultural <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
                      </button>
                      {isEthnicDropdownOpen && (
                        <div className="pl-4">
                          <Link to="/Ethnic/Newar" className="block text-black hover:bg-gray-100 p-2 rounded">Newar</Link>
                          <Link to="/Ethnic/Gurung" className="block text-black hover:bg-gray-100 p-2 rounded">Gurung</Link>
                          <Link to="/Ethnic/Rai" className="block text-black hover:bg-gray-100 p-2 rounded">Rai</Link>
                          <Link to="/Ethnic/Magar" className="block text-black hover:bg-gray-100 p-2 rounded">Magar</Link>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
               {/* Mobile Tourist Attractions dropdown */}
               <div className="relative" ref={eventsRef}>
                <button onClick={toggleEventsDropdown} className="w-full text-left text-black hover:bg-gray-100 p-2 rounded flex items-center">
                  Events <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
                </button>
                {isEventsDropdownOpen && (
                  <div className="pl-4">
                    <Link to="/Events/MusicFestival" className="block text-black hover:bg-gray-100 p-2 rounded">Music Festival</Link>
                    <Link to="/Events/CulturalExhibition" className="block text-black hover:bg-gray-100 p-2 rounded">Cultural Exhibition</Link>
                    <Link to="/Events/Sports" className="block text-black hover:bg-gray-100 p-2 rounded">Sports</Link>
                    <Link to="/Events/Workshops" className="block text-black hover:bg-gray-100 p-2 rounded">Workshops</Link>
                    
                  </div>
                )}
              </div>
              <Link to="/EatDrink" className="block text-black hover:bg-gray-100 p-2 rounded">Eat & Drink</Link>
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 