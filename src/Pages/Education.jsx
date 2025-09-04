import React, { useState } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const TimelineSection = ({ id,title, data, forceSide }) => {
  const [isClicked, setIsClicked] = useState(null);

  return (
    <div id={id}  className="relative w-full max-w-6xl mx-auto py-10 px-3 sm:px-6">
      <p className="text-sm sm:text-md text-gray-500 dark:text-gray-300 text-center">Here's My</p>
      <h1 className="text-xl sm:text-2xl lg:text-2xl text-blue-steel text-center font-bold pb-16">
        {title}
      </h1>
        
      {/* Ligne verticale */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-28 bottom-0 border-l-2 border-steel-sky dark:border-gray-600 hidden sm:block"></div>

      {data.map((item) => {
        // Forcer side en mobile
        const effectiveSide =
          forceSide && window.innerWidth < 640 ? forceSide : item.side;

        return (
          <div
            key={item.id}
            className={`relative mb-12 flex items-center w-full
              ${effectiveSide === "left" ? "flex-row" : "flex-row-reverse"}
              sm:mb-16
            `}
          >
            {/* Date */}
            <div className="hidden sm:block w-1/2 px-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400 text-center">
              {item.date}
            </div>

            {/* Carte */}
            <div className="w-full sm:w-1/2 px-3 sm:px-8">
              <div
              
                className="bg-white dark:bg-gray-800 shadow-md 
                  p-4 sm:p-6 rounded-lg sm:rounded-xl transition-all duration-500 cursor-pointer
                  text-xs sm:text-sm"
                
              >
                <h3 className="text-sm sm:text-lg font-bold text-gray-800 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  {item.subtitle}
                </p>
                <p className="mt-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Icône centrale (cachée en mobile) */}
            <div className="hidden sm:flex absolute left-1/2 transform -translate-x-1/2 rounded-full w-10 h-10 sm:w-14 sm:h-14 items-center justify-center z-20 shadow-lg border-2 border-white dark:border-gray-800 bg-white">
              {item.icon}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const EducationAndCertificates = ({id} ) => {
  const educationData = [
    {
      id: 1,
      side: "left",
      title: "ISIMCOTIC TANGER",
      subtitle: "BAC+2",
      date: "Sep 2022 - Jun 2024",
      description: "Internship in digital development at ISIMCOTIC TANGER.",
      icon: <img src="/OFPPT.svg" alt="" />,
    },
    {
      id: 2,
      side: "right",
      title: "Faculty of Sciences Fes",
      subtitle: "Bachelor's Degree",
      date: "Sep 2021 - Jun 2024",
      description: "Studied PC at Lyceeelmahdi el manjra in Tanger.",
      icon: <img src="/lycee.png" alt="" />,
    },
  ];

  const certificateData = [
    {
      id: 1,
      side: "left",
      title: "Python Essentials 1",
      subtitle: "Cisco Networking Academy",
      date: "Jan 13, 2025",
      description:
        "Intro to Python programming, control structures, data types, functions, and modules.",
      icon: <img src="/cisco-networking-academy.svg" alt="" />,
    },
    {
      id: 2,
      side: "right",
      title: "Work Readiness – Climate Fresk (WR-841)",
      subtitle: "EFE Maroc",
      date: "Mar 29, 2025",
      description:
        "Soft skills: professional communication, time management, teamwork, and climate change awareness.",
      icon: <img src="/efe.png" alt="" />,
    },
  ];

  return (
    <>
      {/* Sur mobile => toujours right pour education */}
      <TimelineSection title="Education"id={id}  data={educationData} forceSide="right" />
      {/* Sur mobile => toujours left pour certificates */}
      <TimelineSection title="Certificates"id={id}  data={certificateData} forceSide="left" />
    </>
  );
};

export default EducationAndCertificates;

