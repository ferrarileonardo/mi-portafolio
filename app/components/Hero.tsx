"use client";

type HeroProps = {
  onNavigate: (section: string) => void;
};

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <main className="pt-32 max-w-6xl mx-auto px-7 flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold text-white">
        Hola, soy <span className="text-purple-500">Leonardo Jiménez</span>
      </h1>
      <p className="mt-6 text-lg max-w-xl text-center text-gray-300">
      Soy ingeniero en informática y desarrollador web Full‑Stack, apasionado por crear soluciones digitales que combinan rendimiento, estética y una excelente experiencia de usuario.

      </p>
      <div className="flex gap-4 mt-8 justify-center">
        <button
          onClick={() => onNavigate("projects")}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded hover:opacity-90"
        >
          Ver proyectos →
        </button>
        <button
          onClick={() => onNavigate("contact")}
          className="border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-black transition"
        >
          Contáctame →
        </button>
       
      </div>
    </main>
  );
}
