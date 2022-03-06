import React from 'react'
import Prarie from '../images/prarie_1.JPG'

export default function Home() {
  return (
      <div id="home-page">
          <div>Home</div>
          
          <div id="home-top-image-div">
              <div id="home-top-image-text-div">
              <div id="home-top-image-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
              </div>
              
            
            <img id="prarie-one-image" alt="prarie-one" src={Prarie} />
          </div>
      </div>
    
  )
}
