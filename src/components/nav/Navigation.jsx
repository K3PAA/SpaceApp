import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { VscChromeClose } from 'react-icons/vsc'
import Logo from './Logo'
import './nav.css'
import { NavLink } from 'react-router-dom'

const navLinks = [
  {
    id: 1,
    url: '/',
    num: '00',
    text: 'home',
  },
  {
    id: 2,
    url: '/destination',
    num: '01',
    text: 'destination',
  },
  {
    id: 3,
    url: '/crew',
    num: '02',
    text: 'crew',
  },
  {
    id: 4,
    url: '/technology',
    num: '03',
    text: 'technology',
  },
]

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const resize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', resize)

    return () => window.removeEventListener('resize', resize)
  }, [windowWidth])

  return (
    <header className='main--navigation'>
      <Logo />

      {windowWidth <= 580 && (
        <button className='nav-toggle' onClick={() => setIsNavOpen(!isNavOpen)}>
          {isNavOpen ? <VscChromeClose /> : <FaBars />}
        </button>
      )}

      {windowWidth >= 1051 && <div className='nav-line'></div>}

      <ul className={isNavOpen ? 'nav--holder' : 'nav--holder nav--offscreen'}>
        {navLinks.map((link) => {
          const { id, url, num, text } = link
          return (
            <NavLink to={url} key={id} className='navcontainer'>
              <span className='navtext'>
                <strong className='nav--number'>{num}</strong>
                {text}
              </span>
            </NavLink>
          )
        })}
      </ul>
    </header>
  )
}

export default Navigation
