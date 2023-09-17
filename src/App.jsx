import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Hero from './components/Hero';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import About from './components/About';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bad">
      <Navbar/>
      <Hero/>
    <About/>
     <Projects/>
        <Contact />
     
       </div>
  
  )
}

export default App
