import React, { useState, useEffect } from 'react'
import './destination.css'

import destinations from './data'
import Planet from './Planet'
import PlanetInfo from './PlanetInfo'
import { useGlobalContext } from '../../context'

function Destination() {
  const [planet, setPlanet] = useState(destinations[0])

  const { setNavActive } = useGlobalContext()

  useEffect(() => {
    setNavActive(2)
  }, [])

  const { images } = planet

  return (
    <main>
      <div className='planet--holder'>
        <div className='planet--first-side'>
          <h5 className='page-title'>
            <span>01</span>Pick your destination
          </h5>
          <Planet image={images} />
        </div>
        <PlanetInfo {...planet} />
      </div>
    </main>
  )
}

export default Destination
