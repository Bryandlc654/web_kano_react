import { useState } from 'react'
import './App.css'
import About from './components/sections/About'
import Header from './components/sections/Header'
import Hero from './components/sections/Hero'
import './assets/js/index'



function App() {
  const [count, setCount] = useState(0)

  return (
  <>
   <Header/>
  <main>
    <Hero/>
    <About/>
  </main>
  </>
  )
}

export default App
