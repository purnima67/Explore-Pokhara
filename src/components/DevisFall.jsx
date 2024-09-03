import React,{useEffect} from 'react';
import devisFall from '../assets/devisFall.jpg';

const DevisFall = () => {
  useEffect(()=> {
    window.scrollTo(0,0);
   }, []);
 
  return (
    <div>Devi's Fall
      <img src={devisFall} alt="devis-fall-in-pokhara"></img>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo animi id natus nisi consequatur quam in incidunt quaerat harum. Repellendus architecto enim deserunt porro magni adipisci eos nulla nam numquam!</p>
    </div>
  );
};

export default DevisFall;
