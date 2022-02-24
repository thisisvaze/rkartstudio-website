import React from 'react';
import Showcase from '../components/Showcase';
import MediumList from '../components/MediumList';


function HomePage(props){
    return(
      <div>
      <Showcase/>
      <h1 className="text-center">Portraits</h1>
      <p className="text-center">
      Personalised Portraits using a variety of mediums in sizes from A5 to A1.
      </p>
      <MediumList/>
      </div>
    )
}

export default HomePage