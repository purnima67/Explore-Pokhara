import React, { useEffect } from 'react';
import bindhyabasini from '../assets/bindhyabasini.jpg'; 

const Bindabasini = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div>
      <h1>Bindabasini Temple</h1>
      <img src={bindhyabasini} alt="bindabasini-temple-in-pokhara" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo animi id natus nisi consequatur quam in incidunt quaerat harum. Repellendus architecto enim deserunt porro magni adipisci eos nulla nam numquam!</p>
    </div>
  );
}

export default Bindabasini;
