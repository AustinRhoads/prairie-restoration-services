import React from 'react'

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

 const loadedAll =() => {

   let title = document.getElementById('title-text');
   title.classList.add("animated");
   title.classList.remove("not-visible");

  let parallax_header = document.querySelector("#parallax-header");
    parallax_header.classList.remove("not-visible")
    parallax_header.classList.add("visible")

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
             
             <h1 className="title not-visible" id="title-text">Get a wildlife management tax valuation for your land while helping to sustain the native Texas Horned Lizard!</h1>
             <div className="greeting-btns">
             <button className="btns">Get started</button> 
             <button className="btns-inverted">Learn More</button>
               </div>
  
             
            </header>
            
    
      
   }

  return (
 
      <div id="home-page" className="parallax-wrapper">

        <div id="home-banner">Prairie WildLife Management Services</div>
          
        {render_parallax_two()}

          <section id="text-section">
            <LoremIpsum p={10} />
          </section>
         
      
          
        
          <footer></footer>
      </div>
  
    
  )
}
