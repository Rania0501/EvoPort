import { FaGithub, FaLinkedin, FaGlobe,FaDownload } from "react-icons/fa";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../Componente/Nav";
import CV from"../assets/FELLOUS EHSAIN Rania_CV.pdf";
import developerImage from "../assets/Développeuse Full-Stack au Bureau (1).png"
import Education from "./Education";
import Contact from "./Contact";
import Skills from "./Skills";
import Services from "./Servics";
import About from "./About";
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
        <p className="font-bold  text-2xl text-gray-500">Hi,I am Rania</p>
        <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-ocean-slate via-steel-sky to-peach-cream bg-clip-text text-transparent h-20">
        {displayedText.split("\n").map((line, index) => (
    <span key={index}>
      {line}
      {index < displayedText.split("\n").length - 1 && <br />}
    </span>
  ))}
      <span className="animate-pulse">|</span>
    </h1>

          <p className="text-gray-700 text-lg md:text-xl">
          <span className="font-bold text-midnight-slate ">I'm a creative developer</span> - passionate about modern web development and user-focused design.
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

        {/* Image à droite */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 pr-10 flex justify-center relative">
  {/* Effet de fond lumineux derrière l'image */}
  <div className="absolute w-80 h-80 md:w-[400px] md:h-[400px] rounded-full blur-4xl bg-gradient-to-br from-ocean-slate via-blue-steel to-peach-cream opacity-30 animate-pulse z-0"></div>

  {/* Image */}
  <img
    src={developerImage}
    alt="Full-Stack Web Developer"
    className="w-64 md:w-96 relative z-10"
    loading="lazy"
  />
</div>

      </section>
      <About id="about"/>
      <Services id="services"/>
      <Education id="education"/>
      <Skills id="skills"/>
      <Contact id="contact"/>
    </>
  );
};

export default Home;

