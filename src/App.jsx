import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import PixelBlast from './components/PixelBlast'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-full overflow-x-hidden">

      <Navbar />

      <section 
        id="home"
        className="relative flex flex-col justify-center items-center h-screen text-center"
      >
        <div className="relative z-10 -mt-20">
          <h1 className="text-6xl font-bold text-white mb-4">
            welcome to my website
          </h1>
          <h2 className="text-2xl text-gray-300">
            seth yeh
          </h2>
        </div>
      </section>

      <section 
        id="about"
        className="flex flex-col justify-center items-center h-screen pt-24 text-center"
      >
        <h1>about me</h1>
        <p>i like stuff</p>
        
      </section>

      

      <section 
        id="contact"
        className="flex flex-col justify-center items-center h-screen pt-24 text-center"
      >
        <h1>contact me</h1>
        <p>Email: sethyeh222@gmail.com</p>
      </section>
      
    </div>
  )
}

export default App
