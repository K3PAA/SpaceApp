import { Outlet } from 'react-router-dom'

import React, { useEffect } from 'react'
import { Navigation } from './components/nav/Navigation'

function App() {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  )
}

export default App
