import React from 'react'

const Header = () => {
return (
    <div className='w-screen flex p-4 justify-between'>
        <div className="text-white">
            <i className="fa fa-briefcase mr-1" aria-hidden="true"></i>
            Shivam
        </div>
        <div className="links  text-white flex gap-2">
            <a
                href="https://www.linkedin.com/in/shivam-gupta-b79965333/"
                className="bg-blue-800 rounded-xs px-[2px]"
                target="_blank"
                rel="noopener noreferrer"
            >
                in
            </a>
            <a
                href="https://github.com/shivam-070208"
                className="bg-gray-800 text-white px-0.5 rounded"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fab fa-github"></i>
            </a>
            <a
                href="/assets/ShivamGuptaResume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="far fa-file-pdf"></i>
            </a>
        </div>
    </div>
)
}

export default Header
