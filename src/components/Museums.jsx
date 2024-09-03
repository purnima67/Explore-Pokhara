import React, {useEffect} from 'react';
import mountainMuseum from '../assets/mountainMuseum.jpg';

const Museums = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

 
  return (
    <div>International Mountain Museum
      <img src={mountainMuseum} alt="international-mountain-museum-in-pokhara"></img>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo animi id natus nisi consequatur quam in incidunt quaerat harum. Repellendus architecto enim deserunt porro magni adipisci eos nulla nam numquam!</p>
    </div>
  );
};

export default Museums;
