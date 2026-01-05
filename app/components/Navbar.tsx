"use client";

type NavbarProps = {
  activeSection: string;
  onNavigate: (section: string) => void;
};

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  // función para aplicar estilos dinámicos
  const linkClass = (id: string) =>
    activeSection === id
      ? "text-purple-500 font-semibold border-b-2 border-purple-500 pb-1"
      : "text-white hover:text-purple-400 transition";

  return (
    <nav className="w-full fixed top-0 left-0 bg-background text-foreground shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="hidden md:block text-purple-500 font-bold text-xl">LJ</div>

        {/* Links */}
        <ul className="flex gap-8 font-medium mx-auto">
          <li>
            <button onClick={() => onNavigate("hero")} className={linkClass("hero")}>
              Inicio
            </button>
          </li>
          <li>
            <button onClick={() => onNavigate("about")} className={linkClass("about")}>
              Sobre mí
            </button>
          </li>
          <li>
            <button onClick={() => onNavigate("projects")} className={linkClass("projects")}>
              Proyectos
            </button>
          </li>
          <li>
            <button onClick={() => onNavigate("contact")} className={linkClass("contact")}>
              Contacto
            </button>
          </li>
        </ul>

        {/* Botón extra 
        <button
          onClick={() => onNavigate("contact")}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded hover:opacity-90 transition"
        >
          Hablemos →
        </button>
        */}
      </div>
    </nav>
  );
}
