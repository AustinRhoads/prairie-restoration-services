import React from 'react'
import { useNavigate } from 'react-router-dom';

import Mission from './Mission';

//import GoalsPage from './GoalsPage'

//import Prarie from '../images/prarie_1.JPG'

//import h_toad_right from '../images/horney-toad-float-right.png'

//import h_toad_float from '../images/horney_toad_float.png'
import h_toad_r_shadow from '../images/horney_toad_1_shadow.png'
//import yellow_grass from '../images/yellow_indian_grass_trans.png'
import { LoremIpsum } from 'react-lorem-ipsum';
//import prairie_fore from '../images/prairie_land_fore.png';



import prairie_mountains from '../images/p_mountains_compressed.png'
import prairie_sky from '../images/p_sky_compressed.png';
import p_top from '../images/p_top_compressed.png'
import p_middle_top from '../images/p_middle_top_compressed.png'
import p_middle_bottom from '../images/p_middle_bottom_compressed.png'
import p_bottom from '../images/p_bottom_compressed.png'





export default function Home() {

  const navigate = useNavigate();

 const loadedAll =() => {

   let title = document.getElementById('title-text');
   title.classList.add("animated");
   title.classList.remove("not-visible");

  let parallax_header = document.querySelector("#parallax-header");
    parallax_header.classList.remove("not-visible")
    parallax_header.classList.add("visible")

 }

 const go_to_contact_page = () => {
  navigate( "/contact", {replace: false})
 }

  const render_parallax_two = () => {

  
            return <header id="parallax-header" className="not-visible">
            
             <img src={prairie_sky} alt="sky" className="way-background parallax-image" />
             <img src={prairie_mountains} alt="mountains" className="background parallax-image" />
             <img src={p_top} alt="p_top" className="p_top parallax-image" />
             <img src={p_middle_top} alt="p_middle_top" className="p_middle_top parallax-image" />
             <img src={p_middle_bottom} alt="p_middle_bottom" className="p_middle_bottom parallax-image" />
             <img id="parallax-toad-right" className="toad-right parallax-toad" src={h_toad_r_shadow} alt="toady" />
             <img src={p_bottom} alt="p_bottom" className="p_bottom parallax-image" onLoad={() => loadedAll()} />

             <div id= "white-gradient-div"></div>
             <div id= "gray-gradient-div"></div>

             <div id="slanted-div"></div>

             <div id="title-text" className="not-visible">
               <div className="title-header title-1"> Bring back the <span className="horney-toad-name">horney toad</span>.</div>
               <div className="title-header title-2"> and get a wildlife management tax valuation for your land.</div> 
             </div>


             <div id="home-mission">

               <div id="green-bar"></div>

                <div id="home-mission-text">
                 Our mission is to empower everyday people with the tools, know-how, and ability to link, increase, improve, and create habitat to make a measurable difference to the prosperity and “comeback” of Texas Horned Lizards.
                </div>  

              </div>


             <div className="greeting-btns">
             <button className="btns" onClick={() => go_to_contact_page()}>Let's Talk!</button> 
             <button className="btns-inverted">Learn More</button>
               </div>
  
             
            </header>
            
    
      
   }

  return (
    <div id="home-page">
      
      <div  className="parallax-wrapper">
        <section id="banner-section">
        <div id="home-banner">TEXAS<span className="horney-toad-name">HORNS</span></div>
        <div id="home-banner-underline">Prairie WildLife Management Services</div>
        </section>
       
          
        {render_parallax_two()}

        <section>
          <Mission />
        </section>

          <section id="text-section">
            <LoremIpsum p={10} />
          </section>
         
      
          
        
          <footer></footer>
      </div>

      </div>
  
    
  )
}
