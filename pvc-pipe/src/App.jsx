import { useState } from 'react'
import './App.css'

function App() {
  const [user, setUser] = useState('Samthatcode')

  return (
    <div className="text-primary border-secondary bg-darkGrey font-poppins">
      Hi {user}, welcome to PVC Pipe
    </div>
  )
}

export default App
