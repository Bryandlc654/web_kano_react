import { useState } from 'react'
import './App.css'
import About from './components/sections/About'
import Header from './components/sections/Header'
import Hero from './components/sections/Hero'
import Gallery from './components/sections/Gallery'
import Team from './components/sections/Team'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
  <>
   <Header/>
  <main>
    <Hero/>
    <About/>
    <Gallery/>
    <Team/>
    <Contact/>
  </main>
  <footer>
    <Footer/>
  </footer>
  </>
  )
}

export default App
