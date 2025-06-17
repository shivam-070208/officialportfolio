import React, { useState } from 'react'
import { motion } from 'motion/react';
const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: 'fab fa-react', color: 'text-blue-400' },
      { name: 'Tailwind CSS', icon: 'fas fa-wind', color: 'text-cyan-400' },
      { name: 'GSAP', icon: 'fas fa-bolt', color: 'text-green-400' },
      { name: 'HTML5', icon: 'fab fa-html5', color: 'text-orange-400' },
      { name: 'CSS3', icon: 'fab fa-css3-alt', color: 'text-blue-300' },
      { name: 'JavaScript', icon: 'fab fa-js', color: 'text-yellow-300' },
      { name: 'Three.js', icon: 'fas fa-cube', color: 'text-gray-300' },
      { name: 'GLSL', icon: 'fas fa-code', color: 'text-pink-400' },
      { name: 'TypeScript', icon: 'fas fa-code', color: 'text-blue-400' },
      { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: 'text-purple-400' },
      { name: 'Framer Motion', icon: 'fas fa-wave-square', color: 'text-pink-300' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: 'fab fa-node-js', color: 'text-green-500' },
      { name: 'Express', icon: 'fas fa-server', color: 'text-gray-400' },
      { name: 'MongoDB', icon: 'fas fa-database', color: 'text-green-700' },
      { name: 'Socket.io', icon: 'fas fa-plug', color: 'text-gray-400' },
      { name: 'Next.js', icon: 'fas fa-forward', color: 'text-gray-200' },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', icon: 'fab fa-git-alt', color: 'text-orange-500' },
      { name: 'GitHub', icon: 'fab fa-github', color: 'text-gray-300' },
      { name: 'VS Code', icon: 'fas fa-code', color: 'text-blue-500' },
      { name: 'Blender', icon: 'fas fa-cube', color: 'text-orange-300' },
    ],
  },
];

const Skill = () => {
  const [activeTab, setActiveTab] = useState('Frontend');
  const activeSkills = skills.find(s => s.category === activeTab);

  return (
    <motion.section initial={{filter:'blur(6px)',y:10}} whileInView={{filter:'blur(0px)',y:0}} transition={{duration:0.8}} id="skill" className="w-full min-h-[60vh]  text-white px-2 py-10 flex flex-col items-center">
      <h2 className="text-2xl md:text-4xl font-extrabold text-blue-400 mb-6">My Skillset</h2>
      <div className="flex gap-1 md:gap-4 mb-6 bg-[#10131a] rounded-full p-1 shadow-md">
        {skills.map(group => (
          <button
            key={group.category}
            className={`px-4 py-1 rounded-full font-semibold border transition-all duration-200 focus:outline-none text-sm md:text-base shadow ${activeTab === group.category ? 'bg-gradient-to-r from-blue-400 to-cyan-400 text-black border-blue-400 scale-105' : 'bg-transparent text-white border-gray-700 hover:bg-blue-900 hover:text-blue-300'}`}
            onClick={() => setActiveTab(group.category)}
          >
            {group.category}
          </button>
        ))}
      </div>
      <div className="w-full max-w-md flex flex-col items-center">
        <div className="bg-gradient-to-br from-[#10131a] to-[#1a2233] rounded-xl shadow-lg p-5 w-full flex flex-col items-center border border-blue-900">
          <h3 className="text-base font-bold text-blue-300 mb-4 tracking-wide uppercase letter-spacing-[0.1em]">{activeSkills.category}</h3>
          <ul className="grid grid-cols-3 gap-4 w-full">
            {activeSkills.items.map(skill => (
              <li key={skill.name} className="flex flex-col items-center gap-1 text-xs font-semibold group">
                <div className={`rounded-full bg-[#181e2a] p-2 shadow mb-1 group-hover:scale-110 transition-transform duration-200`}>
                  <i className={`${skill.icon} ${skill.color || ''} text-lg md:text-xl`}></i>
                </div>
                <span className="text-white group-hover:text-blue-400 transition-colors duration-200 text-center leading-tight">{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Marquee of picked skills */}
       <div className="w-full mt-16 overflow-hidden relativ flex gap-12">
        <div className="whitespace-nowrap min-w-[100vw] animate-marquee flex gap-12 justify-between md:text-2xl font-bold text-blue-300 py-4">
          <span className="flex items-center gap-4">
            <i className="fab fa-react text-blue-400"></i>React
          </span>
          <span className="flex items-center gap-4">
            <i className="fab fa-js text-yellow-300"></i>JavaScript
          </span>
          <span className="flex items-center gap-4">
            <i className="fab fa-node-js text-green-500"></i>Node.js
          </span>
          <span className="flex items-center gap-4">
            <i className="fab fa-git-alt text-orange-500"></i>Git
          </span>
          <span className="flex items-center gap-4">
            <i className="fas fa-bolt text-green-400"></i>GSAP
          </span>
          
          <span className="flex items-center gap-4">
            <i className="fab fa-html5 text-orange-400"></i>HTML5
          </span>
          <span className="flex items-center gap-4">
            <i className="fab fa-css3-alt text-blue-300"></i>CSS3
          </span>
        </div>
           <div className="whitespace-nowrap min-w-[100vw] animate-marquee flex justify-between text-xl md:text-2xl font-bold text-blue-300 py-4">
          <span className="flex items-center gap-4">
            <i className="fab fa-react text-blue-400"></i>React
          </span>
          <span className="flex items-center gap-4">
            <i className="fab fa-js text-yellow-300"></i>JavaScript
          </span>
          <span className="flex items-center gap-4">
            <i className="fab fa-node-js text-green-500"></i>Node.js
          </span>
          <span className="flex items-center gap-4">
            <i className="fab fa-git-alt text-orange-500"></i>Git
          </span>
          <span className="flex items-center gap-4">
            <i className="fas fa-bolt text-green-400"></i>GSAP
          </span>
          
          <span className="flex items-center gap-4">
            <i className="fab fa-html5 text-orange-400"></i>HTML5
          </span>
          <span className="flex items-center gap-4">
            <i className="fab fa-css3-alt text-blue-300"></i>CSS3
          </span>
        </div>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
          transition:all 2s;
            animation: marquee 18s linear infinite;
          }
        `}</style>
      </div>
    </motion.section>
  )
}

export default Skill
