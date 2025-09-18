import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import PixelBlast from './components/PixelBlast'
import { FaGithub } from "react-icons/fa";


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
            my name is seth yeh i like making stuff
          </h2>
        </div>
      </section>

      <section 
        id="stuff"
        className="flex flex-col justify-center items-center h-screen pt-24 text-center"
      >
        <h1>heres my stuff</h1>
          <a 
            href="https://github.com/zef-yeh" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors duration-300 mt-6"
          >
            <FaGithub size={60} />
          </a>
        
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
