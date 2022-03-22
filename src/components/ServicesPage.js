import React from 'react'
import {MdPermMedia, MdPaid} from 'react-icons/md'
import {GiAnt, GiGrass, GiHighGrass, GiBinoculars, GiSniffingDog, GiGecko, GiHornedReptile} from 'react-icons/gi'
import {SiDatadog} from 'react-icons/si'
import {GrOptimize} from 'react-icons/gr'

export default function ServicesPage() {
  return (
    <div>
      <h1>Our Services</h1>
      <div>wildlife tax valuation for landowners</div><MdPaid />
      <div>wildlife management plans and consultations</div><MdPermMedia />
      <div>wildlife surveys of lands (including using trained horned lizard detection canines)</div><GiBinoculars /><GiSniffingDog /><SiDatadog/>
      <div>we will create a map of your ranch with appropriate vegetation suggestions for your specific soils, region, and wildlife goals</div><GiGrass /><GiHighGrass />
      <div>Red Imported Fire Ant management consulting</div><GiAnt />
      <div>Harvester Ant and native insect habitat management </div><GiAnt />
      <div>monitoring reintroduced horned lizard population dynamics</div><GiGecko />
      <div>measuring soil health, soil color, and color-matching for best potential horned lizard reintroduction sites on your lands</div><GrOptimize/><GiHornedReptile/>



    </div>
  )
}
