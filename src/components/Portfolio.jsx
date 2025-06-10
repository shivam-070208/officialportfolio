import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
const projects = [
  {
    title: 'Meetingo',
    description: 'A modern meeting scheduling app that allows users to create, manage, and join meetings seamlessly.',
    tech: ['Ejs','Socket.io','Peerjs', 'Node.js', 'Express', 'MongoDB','Rest Api'],
  
    link: 'https://meetingo.onrender.com',
    github: 'https://github.com/shivam-070208/meetingo',
    image: '/assets/projects/Meetingo.png',
  },
 {
  title:'Solar System',
  description: 'A 3D interactive solar system model built with Three.js, showcasing planets and their orbits.',
    tech: ['Three.js', 'JavaScript'],
    link: 'https://solarsystem-mauve-theta.vercel.app',
    github: 'https://github.com/shivam-070208/Solarsystem',
    image: '/assets/projects/SolarSystem.png'
 }
  ,{
    title: 'AI Image Generator',
    description: 'Generate unique images using AI. Built with Next.js, OpenAI API, and styled for a modern look.',
    tech: ['Next.js', 'OpenAI', 'Tailwind CSS'],
    link: 'https://dalle-2-0-two.vercel.app',
    github: 'https://github.com/shivam-070208/dalle-2.0',
    image: '/assets/projects/Dalle2.0.png',
  },
  {
    title:'Clothify',
    description: 'An e-commerce platform for clothing with a modern design and user-friendly interface only frontend.',
    tech:['React', 'Tailwind CSS', 'Next.js','Three.js'],
    link:'https://clothify-eight.vercel.app',
    github:'https://github.com/shivam-070208/clothify',
    image: '/assets/projects/Clothify.png',
  },
   {
    title: 'Realtime Chat App',
    description: 'A full-stack chat application with real-time messaging, authentication, and group chat support.',
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    link: null,
    github: 'https://github.com/shivam-070208/chatapp',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
  }
]

const Portfolio = () => {
   
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    document.querySelectorAll('section').forEach(section => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
    
        },
       
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      
      });
    });
  }, [])
  return (
    <section id="portfolio" className="w-full min-h-[60vh] bg-black text-white px-2 py-16 flex flex-col items-center mb-20">
      <h2 className="text-2xl md:text-4xl font-extrabold text-blue-400 mb-10">My Projects</h2>
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-[#10131a] card rounded-2xl shadow-lg border border-blue-900 flex flex-col overflow-hidden hover:scale-[1.03] transition-transform duration-200">
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-blue-300 mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-3 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-blue-900 text-blue-300 px-2 py-0.5 rounded text-xs font-semibold">{tech}</span>
                ))}
              </div>
              <div className="flex gap-4 mt-auto">
               { project.link&&<a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline font-semibold">Live</a>}
               {project.github&& <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white font-semibold">GitHub</a>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
