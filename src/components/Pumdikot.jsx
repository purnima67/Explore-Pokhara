import React, {useEffect} from 'react';
import pumdikot from '../assets/pumdikot.jpg';

const Pumdikot = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  }, []);
  return (
    <div>Pumdikot
      <img src={pumdikot} alt="pumdikot-in-pokhara"></img>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo animi id natus nisi consequatur quam in incidunt quaerat harum. Repellendus architecto enim deserunt porro magni adipisci eos nulla nam numquam!</p>
    </div>
  );
};

export default Pumdikot;
