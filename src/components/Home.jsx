import React from 'react'

const Home = () => {
  return (
    <section id='home' className='w-screen h-screen flex flex-col md:flex-row items-center justify-center text-white px-33 mt-29 md:mt-3 lg:mt-0'>
      {/* Left: Text Content */}
      <div className='flex-1 flex flex-col gap-6 max-w-xl '>
        <h1 className='text-4xl md:text-6xl font-extrabold text-blue-400 mb-2'>
          Hi, I'm Shivam
        </h1>
        <h2 className='text-2xl md:text-3xl font-bold text-white mb-4'>
          Full Stack Developer & Tech Enthusiast
        </h2>
        <p className='text-lg md:text-xl text-gray-300 mb-6'>
          I build modern, performant web applications with a passion for clean code, beautiful UI, and seamless user experience. Welcome to my portfolio!
        </p>
        <div className='flex gap-4'>
          <a href='#portfolio' className='bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded font-semibold transition'>View Portfolio</a>
          <a href='#contact' className='border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black px-6 py-2 rounded font-semibold transition'>Contact Me</a>
        </div>
      </div>
      {/* Right: Profile/Illustration */}
      <div className='flex-1 flex items-center justify-center  mt-10 md:mt-0'>
        <div className='relative w-60 h-60 md:w-80 md:h-80  overflow-y-hidden shadow-2xl border-4 border-blue-400 bg-gradient-to-br from-blue-900 to-black flex items-center justify-center heroicimage'>
          {/* Replace with your image or illustration */}
          <span className='text-7xl md:text-[20vw] text-blue-400 font-extrabold'>👨‍💻</span>
        </div>
      </div>
    </section>
  )
}

export default Home
