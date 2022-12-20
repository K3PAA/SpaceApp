import React from 'react'
import SmallNav from './SmallNav'

function PlanetInfo({ name, description, distance, travel }) {
  return (
    <div className='planet--info-container'>
      <SmallNav />
      <div className='planet--section'>
        <h1 className='h1'>{name}</h1>
        <p>{description}</p>
      </div>
      <div className='underline'></div>

      <div className='planet--more'>
        <div className='planet--element'>
          <span>AVG.DISTANCE</span>
          <h5>{distance}</h5>
        </div>
        <div className='planet--element'>
          <span>EST.TRAVEL Time</span>
          <h5>{travel}</h5>
        </div>
      </div>
    </div>
  )
}

export default PlanetInfo
