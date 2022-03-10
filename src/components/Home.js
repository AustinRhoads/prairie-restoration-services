import React from 'react'

//import GoalsPage from './GoalsPage'

//import Prarie from '../images/prarie_1.JPG'

//import h_toad_right from '../images/horney-toad-float-right.png'

//import h_toad_float from '../images/horney_toad_float.png'
import h_toad_r_shadow from '../images/horney_toad_1_shadow.png'
//import yellow_grass from '../images/yellow_indian_grass_trans.png'
import { LoremIpsum } from 'react-lorem-ipsum';
//import prairie_fore from '../images/prairie_land_fore.png';
import prairie_mountains from '../images/prairie_mountains_background.png'
import prairie_sky from '../images/prairie_sky_background.png';


import p_top from '../images/prairie_top.png'
import p_middle_top from '../images/prairie_middle_top.png'
import p_middle_bottom from '../images/prairie_middle_bottom.png'
import p_bottom from '../images/prairie_bottom.png'

export default function Home() {


 // const render_stuff = () => {
 //   return <div>
 //     <div id="home-top-image-div">
 //             <div id="home-top-image-text-div">
 //             <div id="home-top-image-text">Our misson is to empower everyday people with the tools, know-how, and ability to link, increase, improve, and create habitat to make a measurable difference to the prosperity and comeback of Texas Horned Lizards.</div>
 //             </div>
 //             <img src={prairie_sky} alt="sky" />
 //             <img src={prairie_mountains} alt="mountains" />
 //             <img src={prairie_fore} alt="land" />
 //           
 //           {/*<img id="prarie-one-image" alt="prarie-one" src={Prarie} />*/}
 //         </div>
 //         <GoalsPage />
 //         <img id="lizard-right" src={  h_toad_r_shadow} alt="lizard" />
 //         <img id="yellow-grass-img" src={yellow_grass} alt="yellow_grass" />
 //         <img id="lizard-left" src={h_toad_float} alt="above-footer" />
 //   </div>
 // }

 // const render_parallax_one = () => {
 //  return <header id="parallax-header">
 //           <img src={prairie_sky} alt="sky" className="way-background parallax-image" />
 //           <img src={prairie_mountains} alt="mountains" className="background parallax-image" />
 //           <img src={prairie_fore} alt="land" className="foreground parallax-image" />
 //           <h1 className="title">Welcome!</h1>
 //         </header>
 // }

  const render_parallax_two = () => {
    return <header id="parallax-header">
             <img src={prairie_sky} alt="sky" className="way-background parallax-image" />
             <img src={prairie_mountains} alt="mountains" className="background parallax-image" />
             <img src={p_top} alt="p_top" className="p_top parallax-image" />
             <img src={p_middle_top} alt="p_middle_top" className="p_middle_top parallax-image" />
             <img src={p_middle_bottom} alt="p_middle_bottom" className="p_middle_bottom parallax-image" />
             <img id="parallax-toad-right" className="toad-right parallax-toad" src={h_toad_r_shadow} />
             <img src={p_bottom} alt="p_bottom" className="p_bottom parallax-image" />
             
             <h1 className="title">Get a wildlife management tax valuation for your land while helping to sustain the native Texas Horned Lizard!</h1>
             <div className="greeting-btns">
             <button className="btns">Get started</button> 
             <button className="btns-inverted">Learn More</button>
               </div>
             
           </header>
   }

  return (
      <div id="home-page" className="parallax-wrapper">
          
        {render_parallax_two()}
          <section id="text-section">
            <LoremIpsum p={10} />
          </section>
         
          
        
          <footer></footer>
      </div>
    
  )
}
