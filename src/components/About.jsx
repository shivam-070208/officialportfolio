import React from 'react'
import { motion } from 'motion/react'
const About = () => {
  return (
    <motion.section id="about" initial={{filter:'blur(6px)',y:10}} whileInView={{filter:'blur(0px)',y:0}} transition={{duration:0.9}} className="w-screen min-h-screen flex flex-col md:flex-row items-center justify-center  text-white  md:mt-0 mt-10 md:pr-30 px-6 md:px-0 py-16">
      {/* Left: Image or Illustration */}
      <div className="flex-1 flex items-center justify-center mb-10 md:mb-0">
        <div className="w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-xl border-4 border-blue-400 bg-gradient-to-br from-blue-900 to-black flex items-center justify-center">
          {/* Replace with your image if desired */}
          <span className="text-6xl md:text-7xl">🧑‍💼</span>
        </div>
      </div>
      {/* Right: About Content */}
      <div className="flex-1 max-w-2xl flex flex-col gap-6 max-[400px]:text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-blue-400 mb-2">About Me</h2>
        <p className="text-lg md:text-xl text-gray-300">
          Hello! I'm <span className="text-blue-400 font-bold">Shivam</span>, a passionate Full Stack Developer with a love for building beautiful, performant, and user-friendly web applications. My journey in tech started with curiosity and has grown into a deep commitment to learning and creating impactful digital experiences.
        </p>
        <p className="text-lg md:text-xl text-gray-300">
          I specialize in modern JavaScript frameworks, responsive design, and clean, maintainable code. I enjoy collaborating with teams, solving complex problems, and continuously improving my skills.
        </p>
        
        <p className="text-lg md:text-xl text-gray-300">
          Outside of coding, I enjoy reading, exploring new technologies, and sharing knowledge with the community.
        </p>
      </div>
    </motion.section>
  )
}

export default About
