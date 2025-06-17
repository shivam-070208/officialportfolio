import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
const Contact = () => {
  const formRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
formRef.current.reset();
setTimeout(() => setSubmitted(false), 4000);
  };

return (
    <motion.section id="contact" initial={{filter:'blur(6px)',y:10}} whileInView={{filter:'blur(0px)',y:0}} transition={{duration:0.8}} className="w-full min-h-[60vh]  text-white px-2 py-16 flex flex-col items-center">
        <h2 className="text-2xl md:text-4xl font-extrabold text-blue-400 mb-8">Contact Me</h2>
        <p className="text-gray-300 mb-8 max-w-xl text-center">
            Have a project, question, or just want to say hi? Fill out the form below or email me directly at
<a  href="https://gmail.com/"
  target='_blank' onClick={(e)=>{
navigator.clipboard.writeText(e.target.innerText)
  }}

  className="text-blue-400 ml-1">
  shivamdevofficial07@gmail.com
</a>

        </p>
        <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="w-full max-w-lg bg-[#10131a] rounded-2xl shadow-lg p-8 flex flex-col gap-5 border border-blue-900"
        >
            <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="bg-[#181e2a] text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="bg-[#181e2a] text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
                name="message"
                required
                placeholder="Your Message"
                rows={4}
                className="bg-[#181e2a] text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
                type="submit"
                className="bg-gradient-to-r from-blue-400 to-cyan-400 text-black font-bold py-2 rounded shadow hover:scale-105 transition-transform"
            >
                {submitted ? 'Thank you! 🎉' : 'Send Message'}
            </button>
        </form>
        <div className="flex gap-6 mt-10">
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-2xl hover:scale-110 transition-transform"><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-300 text-2xl hover:scale-110 transition-transform"><i className="fab fa-github"></i></a>
            <a href="/src/assets/ShivamGuptaResume.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-2xl hover:scale-110 transition-transform"><i className="fas fa-file-alt"></i></a>
        </div>
    </motion.section>
);
};

export default Contact;
