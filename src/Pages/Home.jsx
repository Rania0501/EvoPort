import { FaGithub, FaLinkedin, FaGlobe,FaDownload } from "react-icons/fa";
import { useState,useEffect } from "react";
import React, { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Nav from "../Componente/Nav";
import CV from"../assets/FELLOUS EHSAIN Rania_CV.pdf";
import developerImage from "../assets/Développeuse Full-Stack au Bureau (1).png"
const About = lazy(() => import("./About"));
const Services = lazy(() => import("./Services"));
const Education = lazy(() => import("./Education"));
const Projects = lazy(() => import("./Projects"));
const Skills = lazy(() => import("./Skills"));
const Contact = lazy(() => import("./Contact"));
const titles = [
 'Front-End\nDeveloper',
  "Back-End\nDeveloper",
  "Full-Stack\nWeb Developer",
  "UI/UX\nDesigner",
];
const Home = ({id} ) => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    if (charIndex < currentTitle.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentTitle.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      }, 100); // vitesse d’écriture (ms)
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      }, 2000); // temps d’attente avant de passer au mot suivant
      return () => clearTimeout(timeout);
    }
  }, [charIndex, currentTitleIndex]);
 
  
  return (
    <>
      <Nav />
      <section id="home"  className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-4 py-10 md:py-20">

        {/* Texte à gauche */}
        <div className="w-full md:w-1/2 text-left space-y-6 ml-10">
         {/* Cercle lumineux uniquement en dark */}
  <div className="hidden dark:block absolute -top-20 -left-10 w-80 h-80 rounded-full bg-blue-400 opacity-30 blur-3xl"></div>
        <p className="font-bold  text-2xl text-gray-500 dark:text-gray-300">Hi,I am Rania</p>
        <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-ocean-slate via-steel-sky to-peach-cream bg-clip-text text-transparent h-20">
        {displayedText.split("\n").map((line, index) => (
    <span key={index}>
      {line}
      {index < displayedText.split("\n").length - 1 && <br />}
    </span>
  ))}
      <span className="animate-pulse">|</span>
    </h1>

          <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl">
          <span className="font-bold text-midnight-slate dark:text-blue-steel">I'm a creative developer</span> - passionate about modern web development and user-focused design.
          </p>

        

          {/* Liens externes (GitHub, LinkedIn...) */}
          <div className="flex gap-4 mt-4">
              {/* Bouton de téléchargement du CV */}
          <a
            href={CV}
            download="CV-FELLOUS EHSAIN Rania.pdf"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-full border-2 border-blue-steel text-blue-steel hover:text-white hover:bg-gradient-to-r hover:from-blue-steel hover:to-steel-sky hover:shadow-lg hover:shadow-blue-steel transition-all duration-300"

          >
            Download CV <FaDownload/>
          </a>
          <a
  href="https://github.com/Rania0501"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="GitHub"
  className="w-10 h-10 flex items-center justify-center border rounded-full border-ocean-slate text-ocean-slate hover:bg-gradient-to-r hover:from-blue-steel hover:to-steel-sky hover:shadow-md hover:shadow-blue-steel hover:text-white transition-all duration-300"
>
  <FaGithub size={20} />
</a>

<a
  href="https://www.linkedin.com/in/rania-fellous-ehsain-86aa8229a"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="LinkedIn"
  className="w-10 h-10 flex items-center justify-center border rounded-full border-ocean-slate text-ocean-slate hover:bg-gradient-to-r hover:from-blue-steel hover:to-steel-sky hover:shadow-md hover:shadow-blue-steel hover:text-white transition-all duration-300"
>
  <FaLinkedin size={20} />
</a>

<a
  href="https://yourwebsite.com"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Portfolio"
  className="w-10 h-10 flex items-center justify-center border rounded-full border-ocean-slate text-ocean-slate hover:bg-gradient-to-r hover:from-blue-steel hover:to-steel-sky hover:shadow-md hover:shadow-blue-steel hover:text-white transition-all duration-300"
>
  <FaGlobe size={20} />
</a>

          </div>

          {/* Exemple de lien interne avec Link */}
          <div className="mt-6">
            <Link
              to="/projects"
              className="underline text-ocean-slate hover:text-blue-muted transition"
            >
              See My Projects →
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center mb-16 relative pr-0 md:pr-10">
 {/* Effet de fond lumineux derrière l'image */}
<div className="absolute w-80 h-80 md:w-[400px] md:h-[400px] rounded-full blur-4xl 
  bg-gradient-to-br from-ocean-slate via-blue-steel to-peach-cream 
  opacity-30 animate-pulse z-0
  dark:from-ocean-slate dark:via-blue-steel dark:to-peach-cream dark:opacity-50
"></div>


  {/* Image */}
  <LazyLoadImage
  src={developerImage}
  alt="Full-Stack Web Developer"
  className="w-64 md:w-96 relative z-10"
  effect="blur" // effet de flou pendant le chargement
/>
</div>


      </section>
      <Suspense fallback={null}>
        <About id="about" />
        <Services id="services" />
        <Education id="education" />
        <Projects id="projects" />
        <Skills id="skills" />
        <Contact id="contact" />
      </Suspense>
    </>
  );
};

export default Home;
