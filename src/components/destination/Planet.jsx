import React from 'react'

function Planet({ image }) {
  console.log(image)
  return (
    <div>
      <img src={image.png} alt='planet image' className='planet-image' />
    </div>
  )
}

export default Planet
