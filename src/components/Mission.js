import React from 'react'
import QuarterToad from '../images/toadonquarter.jpg'

export default function Mission() {
  return (
    <div id="mobile-mission-div">
        <div id="mission-img-div">
            <img id="q-toad" alt="q-toad" src = {QuarterToad} />
        </div>

        <div id="shade-div"></div>

        <div id="mobile-mission-banner">
            <div className="mission-banner-text-top">Our</div>
            <div className="mission-banner-text-bottom">Mission</div>
        </div>


        <div id="mobile-mission-text-div" >
           
            

            <div id="mobile-mission-text">
            <div id="mission-green-bar" ></div>
                is to empower everyday people with the tools, know-how, and ability to link, increase, improve, and create habitat to make a measurable difference to the prosperity and “comeback” of Texas Horned Lizards.    
            </div>
            
        </div>
        <div id="shade-div-2"></div>
        
    </div>
  )
}
