import { useState } from 'react'
import './App.css'
import Navigation from './Navigation/Navigation'
import Shipping from './Navigation/Shipping'
import Home from './Home/Home'
import Footer from './Navigation/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation />
      <Shipping />
      <Home />
      <Footer />
    </>
  )
}

export default App
