import React, {useEffect} from 'react';
import phewaLake from '../assets/phewaLake.jpg';

const PhewaLake = () => {
  useEffect(() =>{

   window.scrollTo(0,0);
  } , []);
  return (
    <div>Phewa Lake
      <img src={phewaLake} alt="phewa-lake-in-pokhara"></img>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo animi id natus nisi consequatur quam in incidunt quaerat harum. Repellendus architecto enim deserunt porro magni adipisci eos nulla nam numquam!</p>
    </div>
  );
};

export default PhewaLake;
