import { useState } from 'react'
import './App.css'
import { Home } from './pages'
import DeliveryDetails from './pages/DeliveryDetails'

function App() {
  const [user, setUser] = useState('Samthatcode')

  return (
    <div className="font-poppins">
      {/* <Home /> */}
      <DeliveryDetails />
    </div>
  )
}

export default App
