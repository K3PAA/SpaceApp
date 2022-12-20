import React, { useEffect } from 'react'

import LandingButton from './LandingButton'
import Introduction from './Introduction'
import './home.css'
import { useGlobalContext } from '../../context'

function Home() {
  const { setNavActive } = useGlobalContext()

  useEffect(() => {
    setNavActive(1)
  }, [])

  return (
    <main>
      <section className='split'>
        <Introduction />
        <LandingButton />
      </section>
    </main>
  )
}

export default Home
