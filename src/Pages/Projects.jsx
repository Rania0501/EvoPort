import { FaLaravel, FaReact, FaBolt, FaChartLine } from "react-icons/fa";
import { SiTailwindcss,SiTypescript } from "react-icons/si";

const Projects = ({ id }) => {
  const projects = [
    {
      id: "1",
      name: "Cozy Suits",
      description:
        "Web application for hotel management, allowing administration of reservations, rooms, and services, with a modern and intuitive interface.",
      technologies: [
        { label: "Laravel", icon: <FaLaravel className="text-red-500" /> },
        { label: "React", icon: <FaReact className="text-sky-500" /> },
        { label: "Vite", icon: <FaBolt className="text-yellow-400" /> },
        { label: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-500" /> },
        { label: "Chart.js", icon: <FaChartLine className="text-green-500" /> },
      ],
      img: "/Cozy-Suits.jpg",
      bg: "bg-gradient-to-r from-[#aa7f19] via-[#c5973f] to-[#e6be73]",
    },
    {
      id: "2",
      name: "AFPH",
      description:
        "Showcase website for the Fraternity Association for People with Disabilities in Tangier, including a landing page, presentation of activities, projects, and social initiatives.",
      technologies: [
        { label: "Laravel", icon: <FaLaravel className="text-red-500" /> },
        { label: "React", icon: <FaReact className="text-sky-500" /> },
        { label: "Vite", icon: <FaBolt className="text-yellow-400" /> },
        { label: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-500" /> },
      ],
      img: "/AFPH.jpg",
      bg: "bg-gradient-to-r from-[#4d8ca8] via-[#70a9c5] to-[#a0cde2]",
    },
    {
      id: "3",
      name: "E-Commerce Dashboard",
      description:
        "Interactive dashboard for an e-commerce website, developed with React, TailwindCSS, and TypeScript. It includes product, order, and user management, as well as dynamic statistics powered by Chart.js.",
      technologies: [
        { label: "React", icon: <FaReact className="text-sky-500" /> },
        { label: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-500" /> },
        { label: "Chart.js", icon: <FaChartLine className="text-green-500" /> },
        { label: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      ],
      img: "/Ecommerce-Dashboard.png",
      bg: "bg-gradient-to-r from-[#6d86a0] to-[#b3c3d1]",
    },
  ];
  

  return (
    <section id={id} className="py-16 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-60">
    {/* Title */}
    <p className="text-md text-gray-500 dark:text-gray-300 text-center">Here's My</p>
    <h1 className="text-xl md:text-2xl text-blue-steel text-center font-bold pb-12">
      Projects
    </h1>
  
    <div className="space-y-10">
      {projects.map((project) => (
        <div
          key={project.id}
          className={`group flex flex-col md:flex-row items-center gap-6 shadow-lg rounded-2xl p-6 hover:shadow-2xl transition ${project.bg}`}
        >
          {/* Left side - content */}
          <div className="flex-1 space-y-4 text-white order-2 md:order-1">
            <h3 className="text-xl sm:text-2xl lg:text-2xl font-semibold">{project.name}</h3>
            <p className="text-sm sm:text-base lg:text-md">{project.description}</p>
  
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                key={index}
                className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-lg text-xs sm:text-sm
                           max-w-[120px] max-h-[40px] shadow-md hover:shadow-xl hover:scale-105 transition-all duration-400 cursor-pointer"
              >
                {tech.icon} {tech.label}
              </span>
              
              ))}
            </div>
            
          </div>
  
          {/* Right side - image */}
          <div className="flex-1 order-1 md:order-2 transition-all duration-500 group-hover:scale-105">
            <img
              src={project.img}
              alt={project.name}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 object-contain rounded-xl shadow-md"
            />
          </div>
        </div>
      ))}
    </div>
  </section>
  
  );
};

export default Projects;
