"use client";

import { useState } from "react";

type NavbarProps = {
  activeSection: string;
  onNavigate: (section: string) => void;
};

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const linkClass = (id: string) =>
    activeSection === id
      ? "text-purple-500 font-semibold border-b-2 border-purple-500 pb-1"
      : "text-white hover:text-purple-400 transition";

  const handleClick = (id: string) => {
    onNavigate(id);
    setOpen(false); // cerrar menú en móvil
  };

  return (
    <nav className="w-full fixed top-0 left-0 bg-background text-foreground shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo (oculto en móvil) */}
        <div className="hidden md:block text-purple-500 font-bold text-xl">
          LJ
        </div>

        {/* Botón hamburguesa (solo móvil) */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>

        {/* Links Desktop */}
        <ul className="hidden md:flex gap-8 font-medium mx-auto">
          <li>
            <button onClick={() => handleClick("hero")} className={linkClass("hero")}>
              Inicio
            </button>
          </li>
          <li>
            <button onClick={() => handleClick("about")} className={linkClass("about")}>
              Sobre mí
            </button>
          </li>
          <li>
            <button onClick={() => handleClick("projects")} className={linkClass("projects")}>
              Proyectos
            </button>
          </li>
          <li>
            <button onClick={() => handleClick("contact")} className={linkClass("contact")}>
              Contacto
            </button>
          </li>
        </ul>
      </div>

      {/* Menú móvil */}
      {open && (
        <div className="md:hidden bg-background border-t border-gray-700">
          <ul className="flex flex-col gap-6 py-6 px-6 text-lg">
            <li>
              <button onClick={() => handleClick("hero")} className={linkClass("hero")}>
                Inicio
              </button>
            </li>
            <li>
              <button onClick={() => handleClick("about")} className={linkClass("about")}>
                Sobre mí
              </button>
            </li>
            <li>
              <button onClick={() => handleClick("projects")} className={linkClass("projects")}>
                Proyectos
              </button>
            </li>
            <li>
              <button onClick={() => handleClick("contact")} className={linkClass("contact")}>
                Contacto
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
