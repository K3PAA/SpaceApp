import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SharedLayout from './SharedLayout'
import Home from './components/home/Home'
import Destination from './components/destination/Destination'
import Error from './Error'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='destination' element={<Destination />} />

          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
