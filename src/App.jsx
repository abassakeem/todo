import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Hero from './components/Hero';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import About from './components/About';
import StarsCanvas from './components/Stars';
import Preloader from './components/Preloader';
function App() {
  const [count, setCount] = useState(0)

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching data) for demonstration purposes.
    setTimeout(() => {
      setLoading(false); // Set loading to false when your app is ready.
    }, 2500);
  }, []);

  return (
    <div className="bad">
      {loading ? (
        <Preloader />
      ) : (
        <>
      <Navbar/>
      <Hero/>
    <About/>
     <Projects/>
        <Contact />
        </>
        
        )}
       </div>
  
  )
}

export default App
