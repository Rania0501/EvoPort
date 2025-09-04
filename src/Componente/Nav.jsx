import React from "react";
import { Link } from "react-scroll"; 
import { FaHome, FaProjectDiagram, FaTools, FaEnvelope, FaGraduationCap, FaUser} from "react-icons/fa";
import { MdMiscellaneousServices } from "react-icons/md";
import { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

function Nav() {
  const navItems = [
    { label: "Home", icon: <FaHome size={15} />, target: "home" },
    { label: "About", icon: <FaUser />, target: "about" },
    { label: "Services", icon: <MdMiscellaneousServices size={20} />, target: "services" },
    { label: "Education", icon: <FaGraduationCap size={15} />, target: "education" },
    { label: "Projects", icon: <FaProjectDiagram />, target: "projects" },
    { label: "Skills", icon: <FaTools />, target: "skills" },
    { label: "Contact", icon: <FaEnvelope />, target: "contact" },
  ];

    const [darkMode, setDarkMode] = useState(false);
  
    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
      document.documentElement.classList.toggle("dark", !darkMode);
    };
  return (
    <nav className="bg-white dark:bg-gray-900 sticky top-0 z-50 text-gray-600 dark:text-gray-300" aria-label="Main navigation">




        {/* Navigation Desktop */}
        <div className="hidden sm:flex items-center mr-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 ml-2 pr-14 sm:ml-7">
          <img src="/evoport.svg" alt="Logo" className="h-10 w-auto object-contain" />
          <span className="text-xl font-bold text-ocean-slate dark:text-blue-steel hidden sm:inline">EvoPort</span>
        </div>
        <ul className="flex space-x-8 text-sm font-medium text-gray-600 dark:text-gray-300">
  {navItems.map(({ label, icon , target }) => (
    <li key={label}>
      <Link
        to={target}
        smooth={true}
        duration={600}
        offset={-70} 
        className="flex items-center gap-1 cursor-pointer hover:text-ocean-slate hover:underline underline-offset-4 rounded px-2 py-1 transition dark:hover:text-blue-steel"
      >
        {icon}
        {label}
      </Link>
    </li>
  ))}
  <button onClick={toggleDarkMode} className="text-2xl ml-2">
    {darkMode ? <FiSun className="text-yellow-500" /> : <FiMoon className="text-gray-400" />}
  </button>
</ul>

         
        </div>
        
      </div>

    


  {/* Icons mobile */}
  <div className="flex items-center gap-3">
  <div className="sm:hidden flex items-center justify-between bg-white dark:bg-gray-900 shadow-lg rounded-full px-3 py-2 my-4 mx-2 animated-radial-border relative z-10">
  <div className="flex items-center gap-1">
    <img src="/evoport.svg" alt="Logo" className="h-8 w-auto object-contain" />
    <span className="text-lg font-bold text-ocean-slate dark:text-gray-300"></span>
  </div>

  <div className="flex items-center gap-3">
    {navItems.map(({ label, icon, target  }) => (
      <Link
        key={label}
        to={target}
        smooth={true}
        duration={600}
        offset={-70}
        className="flex flex-col items-center justify-center w-9 h-9 text-gray-600 dark:text-gray-300 hover:text-ocean-slate transition rounded-full cursor-pointer"
      >
        {icon}
      </Link>
    ))}
    <button onClick={toggleDarkMode} className="text-2xl">
      {darkMode ? <FiSun className="text-yellow-500" /> : <FiMoon className="text-gray-400" />}
    </button>
  </div>
</div>

  </div>


{/* Gradient Border Animation */}
<style>{`
.animated-radial-border {
  position: relative;
  border-radius: 9999px; /* rounded-full */
  overflow: hidden;
}

.animated-radial-border::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 2px; /* épaisseur de la bordure */
  background: conic-gradient(
    from 0deg,
    #FFE7D6,
    #c9d8e1e7,
    #3F6E8C,
    #618AA4,
    #FFE7D6
  );
  -webkit-mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;

  animation: gradientShift 2s linear infinite;
  z-index: 0;
}

.animated-radial-border > * {
  position: relative;
  z-index: 1;
}

@keyframes gradientShift {
  0% {
    background: conic-gradient(
      from 0deg,
      #FFE7D6,
      #c9d8e1e7,
      #3F6E8C,
      #618AA4,
      #FFE7D6
    );
  }
  50% {
    background: conic-gradient(
      from 180deg,
      #618AA4,
      #3F6E8C,
      #c9d8e1e7,
      #FFE7D6,
      #618AA4
    );
  }
  100% {
    background: conic-gradient(
      from 360deg,
     
      #c9d8e1e7,
       #FFE7D6,
      #3F6E8C,
      #FFE7D6
      #618AA4,
      
    );
  }
}

`}</style>

    </nav>
  );
}

export default Nav;



