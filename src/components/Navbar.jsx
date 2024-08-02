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
  const [isEventsDropdownOpen, setIsEventsDropdownOpen] = useState(false); // New state for Events dropdown

  const thingsToDoRef = useRef(null);
  const adventureRef = useRef(null);
  const touristAttractionsRef = useRef(null);
  const communityRef = useRef(null);
  const ethnicRef = useRef(null);
  const eventsRef = useRef(null); // Ref for Events dropdown

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
                      <Link to="/ThingsToDo/Adventure/Paragliding" className="block px-4 py-2 text-black hover:bg-gray-100">Paragliding</Link>
                      <Link to="/ThingsToDo/Adventure/BungeeJump" className="block px-4 py-2 text-black hover:bg-gray-100">Bungee Jump</Link>
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
                      <Link to="/Ethnic/Magar" className="block px-4 py-2 text-black hover:bg-gray-100">Magar</Link>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Events dropdown */}
          <div className="relative" ref={eventsRef}>
            <button onClick={toggleEventsDropdown} className="text-white hover:text-gray-300 flex items-center">
              Events <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
            </button>
            {isEventsDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                <Link to="/Events/MusicFestival" className="block px-4 py-2 text-black hover:bg-gray-100">Music Festival</Link>
                <Link to="/Events/CulturalExhibition" className="block px-4 py-2 text-black hover:bg-gray-100">Cultural Exhibition</Link>
                <Link to="/Events/Sports" className="block px-4 py-2 text-black hover:bg-gray-100">Sports</Link>
                <Link to="/Events/Workshops" className="block px-4 py-2 text-black hover:bg-gray-100">Workshops</Link>
              </div>
            )}
          </div>

          <Link to="/About" className="text-white hover:text-gray-300">Eat and drink</Link>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-75 z-30">
          <div className="flex justify-end p-4">
            <button onClick={closeSidebar} className="text-white focus:outline-none">
              <FontAwesomeIcon icon={faTimes} className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-col items-center space-y-4 mt-16">
            <Link to="/" className="text-white hover:text-gray-300">Home</Link>

            {/* Things to do dropdown */}
            <div className="relative" ref={thingsToDoRef}>
              <button onClick={toggleThingsToDoDropdown} className="text-white hover:text-gray-300 flex items-center">
                Things to do <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
              </button>
              {isThingsToDoDropdownOpen && (
                <div className="mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                  <Link to="/ThingsToDo/Boating" className="block px-4 py-2 text-black hover:bg-gray-100">Boating</Link>
                  <Link to="/ThingsToDo/Hiking" className="block px-4 py-2 text-black hover:bg-gray-100">Hiking</Link>
                  <Link to="/ThingsToDo/Cycling" className="block px-4 py-2 text-black hover:bg-gray-100">Cycling</Link>
                  <div className="relative" ref={adventureRef}>
                    <button onClick={toggleAdventureDropdown} className="w-full text-left text-black hover:bg-gray-100 p-2 rounded flex items-center">
                      Adventure <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
                    </button>
                    {isAdventureDropdownOpen && (
                      <div className="pl-4">
                        <Link to="/ThingsToDo/Adventure/Paragliding" className="block px-4 py-2 text-black hover:bg-gray-100">Paragliding</Link>
                        <Link to="/ThingsToDo/Adventure/BungeeJump" className="block px-4 py-2 text-black hover:bg-gray-100">Bungee Jump</Link>
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
                <div className="mt-2 w-48 bg-white rounded-md shadow-lg z-20">
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
                <div className="mt-2 w-48 bg-white rounded-md shadow-lg z-20">
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
                        <Link to="/Ethnic/Magar" className="block px-4 py-2 text-black hover:bg-gray-100">Magar</Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Events dropdown */}
            <div className="relative" ref={eventsRef}>
              <button onClick={toggleEventsDropdown} className="text-white hover:text-gray-300 flex items-center">
                Events <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
              </button>
              {isEventsDropdownOpen && (
                <div className="mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                  <Link to="/Events/MusicFestival" className="block px-4 py-2 text-black hover:bg-gray-100">Music Festival</Link>
                  <Link to="/Events/CulturalExhibition" className="block px-4 py-2 text-black hover:bg-gray-100">Cultural Exhibition</Link>
                  <Link to="/Events/Sports" className="block px-4 py-2 text-black hover:bg-gray-100">Sports</Link>
                  <Link to="/Events/Workshops" className="block px-4 py-2 text-black hover:bg-gray-100">Workshops</Link>
                </div>
              )}
            </div>

            <Link to="/About" className="text-white hover:text-gray-300">Eat and drink</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
