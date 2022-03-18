import React from 'react'
import {FaHatCowboy} from "react-icons/fa";
import {GiFarmer} from 'react-icons/gi'
import {MdPark, MdArchitecture, MdLandscape} from "react-icons/md"



export default function Who() {
  return (
    <div id="who-div">
       

       
        <div id="who-items-container">

            <div className="who-items-row"> 

                <div className="who-item"> 
                    <div id="who-banner">Who<br /> <span className="make-it-green">We</span><br /> Work <br /> With</div>
                </div>           
                <div className="who-item"> 
                    <FaHatCowboy className="who-icon" />
                    <div className="who-text">Ranchers</div> 
                </div>

            </div>



            <div className="who-items-row">
                <div className="who-item"> 
                <GiFarmer className="who-icon" />
                    <div className="who-text">Land Owners</div> 
                </div>
                <div className="who-item make-it-white"> 
                <MdPark className="who-icon" />
                    <div className="who-text">Park Managers</div> 
                </div>
            </div>


            <div className="who-items-row">
            <div className="who-item"> 
            <MdLandscape className='who-icon' />
                    <div className="who-text">Land Managers</div> 
                </div>
                <div className="who-item"> 
                    < MdArchitecture className='who-icon' />
                    <div className="who-text">City Planners</div> 
                </div>
            </div>



        </div>
    </div>
  )
}
