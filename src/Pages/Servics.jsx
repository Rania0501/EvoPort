import React from "react";
import { FaLaptopCode, FaPencilRuler, FaMobileAlt } from "react-icons/fa"; // tu peux choisir d'autres icônes

function Services({id} ) {
  const services = [
    {
      icon: <img src="code.png "alt=""  size={10}  />,
      title: "Web Development",
      description: "I create modern, high-performance websites and applications using React, Laravel, and other technologies."
        

    },
    {
      icon: <img src="web-design.png "alt=""  size={10}  />,
      title: "UI/UX Design",
      description: "I design intuitive interfaces and attractive user experiences with Figma and Tailwind CSS."
    },
    {
      icon: <img src="serveur.png" alt="" size={10}/>,
      title: "Hosting & Deployment",
      description: "I deploy websites and applications using GitHub, Cloud services, and AWS, with regular maintenance and updates."
    },
  ];

  return (
    <section id={id} className="py-12 bg-gradient-to-br from-[#3b618010] via-[#3b618010] to-[#ffe7d637]">
      <div className="max-w-6xl mx-auto px-6">
      <p className="text-md text-gray-500 text-center">What I Do</p>
      <h1 className="text-2xl text-blue-steel text-center font-bold pb-12">
       My Skills
      </h1>
      <div className="grid md:grid-cols-3 gap-8">
  {services.map((service, index) => (
    <div
      key={index}
      className="relative bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-2xl transition-all duration-300 corner-border"
    >
      <div className="flex justify-center mb-4">{service.icon}</div>
      <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
      <p className="text-gray-600">{service.description}</p>
    </div>
  ))}
</div>

<style>{`
.corner-border::before,
.corner-border::after {
  content: "";
  position: absolute;
  width: 45px;   /* taille coin */
  height: 45px;
  border: 3px solid #618AA4; /* blue-steel par défaut */
  transition: border-color 0.5s ease;
}

.corner-border::before {
  top: 0;
  right: 0;
  border-bottom: none;
  border-left: none;
  border-top-right-radius: 12px;
}

.corner-border::after {
  bottom: 0;
  left: 0;
  border-top: none;
  border-right: none;
  border-bottom-left-radius: 12px;
}

/* Hover → change de couleur */
.corner-border:hover::before,
.corner-border:hover::after {
  border-color: #3F6E8C; /* ocean-slate */
}
`}</style>



      </div>
    </section>
  );
}

export default Services;
