import React, {useEffect} from 'react';
import sarangkot from '../assets/sarangkot.jpg';

const Sarangkot = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  return (
    <div>Sarangkot
      <img src={sarangkot} alt="sarangkot-in-pokhara"></img>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo animi id natus nisi consequatur quam in incidunt quaerat harum. Repellendus architecto enim deserunt porro magni adipisci eos nulla nam numquam!</p>
    </div>
  );
};

export default Sarangkot;
