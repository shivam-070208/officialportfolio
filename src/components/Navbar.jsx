import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ setCurrentPage }) => {
  const currentNavRef = React.useRef(null);
  const navContainerRef = React.useRef(null);
  const linkRefs = React.useRef([]);
  const location = useLocation();
useEffect(() => {
  const paths = ["/", "/portfolio", "/education", "/milestones", "/contact"];
  const idx = paths.indexOf(location.pathname);
  if (idx !== -1 && linkRefs.current[idx]) {
    linkRefs.current[idx].click();
  }
  
}, [location.pathname]);
   
  const handleClick = (e, to) => {
    const rect = navContainerRef.current.getBoundingClientRect();
    const x =
      e.target.closest("a, [role='link']").getBoundingClientRect().x -
      rect.x +
      e.target.closest("a, [role='link']").offsetWidth / 2 -
      16;
    currentNavRef.current.style.cssText = `left: ${x}px`;

    linkRefs.current.forEach((link) => {
      link.classList.remove("checkedroute");
    });
    e.target.closest("a, [role='link']").classList.add("checkedroute");

    if (setCurrentPage) setCurrentPage(to);
  };

  return (
    <div
      ref={navContainerRef}
      className="bg-white py-1 rounded-full flex px-4 gap-4 mt-3 relative"
    >
      <div
        ref={currentNavRef}
        className="bg-green-600 h-8 w-8 rounded-full absolute z-[0] translate-y-[-50%] border-[#090B1B] border-2 transition-all duration-300"
      />
      <Link
        to="/"
        ref={(el) => (linkRefs.current[0] = el)}
        className={`z-1${location.pathname === "/" ? " checkedroute" : ""}`}
        onClick={(e) => handleClick(e, "/")}
      >
        <i className="fas fa-home text-[1.2rem] text-blue-600"></i>
        <p className="text-[0.5rem] mt-[4px] text-[rgb(2, 9, 80)] font-bold absolute translate-x-[2px]">
          Home
        </p>
      </Link>
      <Link
        to="/portfolio"
        ref={(el) => (linkRefs.current[1] = el)}
        className={`text-center${
          location.pathname === "/portfolio" ? " checkedroute" : ""
        }`}
        onClick={(e) => handleClick(e, "/portfolio")}
      >
        <i className="fas fa-project-diagram text-[1.2rem] text-blue-600"></i>
        <p className="text-[0.5rem] mt-[4px] text-[rgb(2, 9, 80)] font-extrabold absolute">
          Portfolio
        </p>
      </Link>
      <Link
        to="/education"
        ref={(el) => (linkRefs.current[2] = el)}
        className={`text-center${
          location.pathname === "/education" ? " checkedroute" : ""
        }`}
        onClick={(e) => handleClick(e, "/education")}
      >
        <i className="fas fa-graduation-cap text-[1.2rem] text-blue-600"></i>
        <p className="text-[0.5rem] mt-[4px] text-[rgb(2, 9, 80)] font-bold absolute">
          Education
        </p>
      </Link>
      <Link
        to="/milestones"
        ref={(el) => (linkRefs.current[3] = el)}
        className={location.pathname === "/milestones" ? "checkedroute" : ""}
        onClick={(e) => handleClick(e, "/milestones")}
      >
        <i className="fas fa-certificate text-[1.2rem] text-blue-600"></i>
        <p className="text-[0.5rem] mt-[4px] text-[rgb(2, 9, 80)] font-bold absolute translate-x-[-4px]">
          Milestones
        </p>
      </Link>
      <Link
        to="/contact"
        ref={(el) => (linkRefs.current[4] = el)}
        className={location.pathname === "/contact" ? "checkedroute" : ""}
        onClick={(e) => handleClick(e, "/contact")}
      >
        <i className="fas fa-envelope text-blue-600 text-[1.2rem]"></i>
        <p className="text-[0.5rem] mt-[4px] text-[rgb(2, 9, 80)] font-bold absolute translate-x-[-2px]">
          Contact
        </p>
      </Link>
    </div>
  );
};

export default Navbar;