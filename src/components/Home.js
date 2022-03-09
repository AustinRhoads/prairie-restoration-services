import React from 'react'

import GoalsPage from './GoalsPage'

import Prarie from '../images/prarie_1.JPG'
import h_toad_float from '../images/horney_toad_float.png'
import h_toad_right from '../images/horney-toad-float-right.png'

export default function Home() {
  return (
      <div id="home-page">
          <div>Home</div>
          <img id="lizard-right" src={ h_toad_right} alt="lizard" />
          
          <div id="home-top-image-div">
              <div id="home-top-image-text-div">
              <div id="home-top-image-text">Our misson is to empower everyday people with the tools, know-how, and ability to link, increase, improve, and create habitat to make a measurable difference to the prosperity and “comeback” of Texas Horned Lizards.</div>
              </div>
              
            
            <img id="prarie-one-image" alt="prarie-one" src={Prarie} />
          </div>
          <GoalsPage />
          <img id="lizard-left" src={h_toad_float} alt="above-footer" />
          <footer></footer>
      </div>
    
  )
}
