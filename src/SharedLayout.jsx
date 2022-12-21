import { Outlet } from 'react-router-dom'
import Navbar from './components/nav/Navigation'

function SharedLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default SharedLayout
