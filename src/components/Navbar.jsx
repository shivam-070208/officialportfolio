import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
const NAV_LINKS = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skill', href: '#skill', id: 'skill' },
  { label: 'Portfolio', href: '#portfolio', id: 'portfolio' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];
const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shivam-gupta-070208bts', icon: 'fab fa-linkedin' },
  { label: 'GitHub', href: 'https://github.com/shivam-070208', icon: 'fab fa-github' },
  { label: 'Resume', href: '/src/assets/ShivamGuptaResume.pdf', icon: 'fas fa-file-alt', isResume: true },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState(window.location.hash.replace('#','')||'home'); // Default to 'home' if no path
  const observerRef = useRef(null);
    const navref = useRef([])
useEffect(() => {
    if (!active || !navref.current) return;
    navref.current.forEach((el, idx) => {
        if (!el) return;
        const link = NAV_LINKS[idx];
         if(!link) return;
      
        if ( link['id'] == active) {
            el.style.color = 'rgb(59, 130, 246)'; // blue-400
            el.style.fontWeight = 'bold';
        } else {
            el.style.color = '';
            el.style.fontWeight = '';
        }
    });
}, [active, navref]);
  useEffect(() => {
    const handleObserve = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.4) {
         
          setActive(entry.target.id);
        }
      });
    };
    const observer = new window.IntersectionObserver(handleObserve, { threshold: [0.4] });
    NAV_LINKS.forEach(link => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });
    observerRef.current = observer;
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id) => {
    setActive(id);
    setMobileOpen(false);
  };

  return (
    <motion.nav className="w-full fixed top-0 left-0 z-50 bg-black/80 backdrop-blur border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        {/* Left: Name & Icon */}
        <div className="flex items-center gap-2 text-white text-lg font-bold">
          <i className="fas fa-briefcase text-blue-400 text-xl"></i>
          <span>Shivam</span>
        </div>
        {/* Middle: Nav Links (hidden on mobile) */}
        <div className="hidden md:flex gap-6">
          {NAV_LINKS.map(link => (
            <a
              key={link.id}
              href={link.href}
              ref={(el)=> navref.current.push(el)}
              className={`transition-colors duration-200 px-2 py-1 rounded text-white font-medium hover:text-blue-400}`}
              onClick={() => handleNavClick(link.id)}
            >
              {link.label}
            </a>
          ))}
        </div>
        {/* Right: Social Links (hidden on mobile) */}
        <div className="hidden md:flex gap-4 items-center">
          {SOCIAL_LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 text-xl"
              {...(link.isResume ? { style: { textDecoration: 'underline' } } : {})}
            >
              <i className={link.icon}></i>
              <span className="sr-only">{link.label}</span>
            </a>
          ))}
        </div>
        {/* Mobile menu button */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setMobileOpen(true)}
          aria-label="Open navigation menu"
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>
      {/* Mobile Nav Slide Down */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center animate-slideDown">
          <button
            className="absolute top-4 right-6 text-white text-3xl"
            onClick={() => setMobileOpen(false)}
            aria-label="Close navigation menu"
          >
            <i className="fas fa-times"></i>
          </button>
          <div className="flex flex-col gap-8 mt-10  bg-[#11111145] backdrop-blur-2xl w-screen">
            {NAV_LINKS.map(link => (
              <a
                key={link.id}
                href={link.href}
                className={`text-white text-2xl font-semibold transition-colors duration-200 ${active === link.id ? 'text-blue-400 font-bold' : ''}`}
                onClick={() => handleNavClick(link.id)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-6 mt-8">
              {SOCIAL_LINKS.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 text-2xl"
                  {...(link.isResume ? { style: { textDecoration: 'underline' } } : {})}
                >
                  <i className={link.icon}></i>
                  <span className="sr-only">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* Slide down animation */}
      <style>{`
        @keyframes slideDown {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(0); }
        }
        .animate-slideDown {
          animation: slideDown 0.3s cubic-bezier(0.4,0,0.2,1) forwards;
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;
