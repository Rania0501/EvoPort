import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaCss3,
  FaPhp,
  FaJs,
  FaLaravel,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import { SiMysql, SiMongodb, SiFigma, SiTailwindcss } from "react-icons/si";

const Skills = ({id} ) => {
  const dataSkils = [
    { id: 1, name: "JavaScript", icon: <FaJs size={30} /> },
    { id: 2, name: "HTML", icon: <FaHtml5 size={30} /> },
    { id: 3, name: "CSS", icon: <FaCss3 size={30} /> },
    { id: 4, name: "React", icon: <FaReact size={30} /> },
    { id: 5, name: "Node.js", icon: <FaNodeJs size={30} /> },
    { id: 6, name: "PHP", icon: <FaPhp size={34} /> },
    { id: 7, name: "Python", icon: <FaPython size={30} /> },
    { id: 8, name: "Laravel", icon: <FaLaravel size={30} /> },
    { id: 9, name: "MongoDB", icon: <SiMongodb size={30} /> },
    { id: 10, name: "MySQL", icon: <SiMysql size={34} /> },
    { id: 11, name: "GitHub", icon: <FaGithub size={30} /> },
    { id: 12, name: "Git", icon: <FaGitAlt size={30} /> },
    { id: 13, name: "Figma", icon: <SiFigma size={30} /> },
    { id: 14, name: "Tailwind", icon: <SiTailwindcss size={30} /> },
  ];

  return (
    <div id={id}  className="relative w-full max-w-5xl mx-auto py-20 px-5">
      <p className="text-md text-gray-500 text-center">Here's My</p>
      <h1 className="text-2xl text-blue-steel text-center font-bold pb-12">
        Skills
        
      </h1>

     <Swiper
  modules={[Pagination, Autoplay]}
  spaceBetween={15}
  autoplay={{
    delay: 700,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }}
  breakpoints={{
    320: {  // 📱 Mobile
      slidesPerView: 3,
    },
    768: {  // 📱 Tablette / laptop
      slidesPerView: 6,
    },
    1280: { // 🖥️ TV / grands écrans
      slidesPerView: 8,
    },
  }}
>
  {dataSkils.map((i) => (
    <SwiperSlide key={i.id} className="flex justify-center">
      <div
        className="flex flex-col items-center justify-center 
                  w-16 h-16  lg:w-20 lg:h-20 xl:w-22 xl:h-22
                   rounded-xl border-2 border-blue-steel text-blue-steel cursor-pointer shadow-md 
                   transition-all duration-500 transform hover:bg-blue-steel hover:text-peach-cream"
      >
        <div className="text-xl sm:text-lg lg:text-2xl xl:text-3xl mb-1">{i.icon}</div>
        <div className="text-xs sm:text-sm lg:text-sm xl:text-md font-medium">{i.name}</div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>


    </div>
  );
};

export default Skills;
