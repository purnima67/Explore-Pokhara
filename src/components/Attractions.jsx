
import React, { useState } from 'react';
import PhotoGallery from './PhotoGallery';
import Mountains from './Mountains';
import BoatingAdventure from './BoatingAdventure';
import SunriseBliss from './SunriseBliss';

const Attractions = () => {
  const [view, setView] = useState('gallery'); 

  return (
    <div>
      {view === 'mountains' && <Mountains />}
      {view === 'boating' && <BoatingAdventure />}
      {view === 'Sunrise' && <SunriseBliss />}
      {view === 'gallery' && (
        <PhotoGallery
          onClickScenicMountains={() => setView('mountains')}
          onClickBoatingAdventure={() => setView('boating')}
          onClickSunriseBliss={() => setView('Sunrise')}
        />
      )}
    </div>
  );
};

export default Attractions;
