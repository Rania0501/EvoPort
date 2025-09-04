import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy, useState, useEffect } from "react";


// Lazy load des pages
const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Projects = lazy(() => import("./Pages/Projects"));
const Skills = lazy(() => import("./Pages/Skills"));
const Contact = lazy(() => import("./Pages/Contact"));
const Education = lazy(() => import("./Pages/Education"));
const Services = lazy(() => import("./Pages/Services"));
const App = () => {
  // Loader state
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setLoading(false);
            return 100;
          }
          return prev + 1; // augmente de 1% toutes les 300ms
        });
      }, 80); // vitesse (ici 30ms => environ 3 secondes pour 100%)
    }
  }, [loading]);

  // Si on est encore en chargement => affiche ton loader
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo with shadow */}
          <img
            src="/evoport.svg"
            alt="Evoport Logo"
            className="w-32 h-32 drop-shadow-2xl animate-pulse"
          />

          {/* Loading text */}
          <div className="text-xl font-semibold text-gray-700">
            Loading... {progress}%
          </div>

          {/* Progress bar */}
          <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-blue-steel via-steel-sky to-peach-cream transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    );
  }

  // Sinon => affiche ton site normalement
  return (
    <Router>

     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services/>} />
        </Routes>

    </Router>
  );
};

export default App;

