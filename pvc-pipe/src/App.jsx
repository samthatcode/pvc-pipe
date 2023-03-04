import { useState } from 'react'
import './App.css'
import { Home } from './pages'

function App() {
  const [user, setUser] = useState ('Samthatcode')

  return (
    
    <div className="font-poppins">
      <Home />
    </div>
  )
}

export default App
