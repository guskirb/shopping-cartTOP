import { useState } from 'react'
import './App.css'
import Navigation from './Navigation/Navigation'
import Home from './Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation />
      <Home />
    </>
  )
}

export default App
