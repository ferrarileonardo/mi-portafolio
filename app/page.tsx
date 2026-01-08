"use client";

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // 60% visible para marcar como activa
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const handleNavigate = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-background text-foreground font-sans min-h-screen flex flex-col">
      {/* Navbar fijo arriba */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Hero */}
      <section id="hero" className="scroll-mt-32">
        <Hero onNavigate={handleNavigate} />
      </section>

      {/* About */}
      <About />

     <section id="projects" className="scroll-mt-20 -mt-12 px-6 max-w-6xl mx-auto">
  <Projects />
</section>

    

        
{/* Contact */}
<section
  id="contact"
  className="scroll-mt-50 mt-50 py-32 px-6 max-w-6xl mx-auto"
>
  <h2 className="text-4xl font-bold text-purple-500 mb-6">Contacto</h2>

  <div>
    
    <div className="space-y-4">
      {/* Email */}
      <p className="flex items-center gap-3 text-gray-400">
        <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        leosenin.123@gmail.com
      </p>

      {/* Ubicación */}
      <p className="flex items-center gap-3 text-gray-400">
        <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        Caracas Avenida principal de La Carlota Edificio Arcorisa piso 2 apartamento 5.
      </p>

      {/* Teléfono */}
      <p className="flex items-center gap-3 text-gray-400">
        <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h2l3 7-1.5 1.5a11 11 0 005 5L13 16l7 3v2a2 2 0 01-2 2h-1c-9.94 0-18-8.06-18-18V3a2 2 0 012-2h2z" />
        </svg>
        04125546012
      </p>
    </div>
  </div>
</section>





    </div>
  );
}
