import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const startDate = new Date("2021-01-01");
  const today = new Date();

  const yearsOfExperience =
    today.getFullYear() -
    startDate.getFullYear() -
    (today < new Date(today.getFullYear(), startDate.getMonth(), startDate.getDate()) ? 1 : 0);

  return (
    <section
      id="about"
      className="scroll-mt-24 md:scroll-mt-32 py-20 md:py-32 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto flex flex-col items-center text-center bg-background text-foreground"
    >
      {/* Foto */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex-shrink-0 mb-6"
      >
        <Image
          src="/Images/leo.png"
          alt="Foto de Leonardo Jiménez"
          width={180}
          height={180}
          className="rounded-full object-cover shadow-lg border-4 border-purple-500 w-40 h-40 sm:w-48 sm:h-48"
        />
      </motion.div>

      {/* Título */}
      <h2 className="text-3xl sm:text-4xl font-bold text-purple-500 mb-6">
        Sobre mí
      </h2>

      {/* Descripción */}
      <p className="max-w-2xl text-base sm:text-lg text-gray-300 leading-relaxed px-2">
        Soy desarrollador web con{" "}
        <span className="font-semibold">{yearsOfExperience}</span> años de experiencia en proyectos frontend y backend.
        He trabajado con diferentes tecnologías desarrollando paneles administrativos, apps móviles y módulos personalizados.
        Me apasiona crear soluciones funcionales, escalables y visualmente atractivas, integrando rendimiento técnico con una excelente experiencia de usuario.
      </p>

      {/* Botón CV */}
      <div className="mt-8 flex justify-center">
        <a
          href="/CV2.pdf"
          download="CV2.pdf"
          className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded hover:bg-purple-500 hover:text-white transition text-sm sm:text-base"

        >
          Descargar CV
        </a>
      </div>

      {/* Skills */}
      <div className="mt-16 w-full">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-500 mb-6">
          Tecnologías que manejo
        </h3>

        <div className="flex flex-wrap gap-3 justify-center px-2">
          {[
            "React.js", "ReactNative", "Next.js", "TypeScript", "JavaScript",
            "Node.js", "NestJS", "MongoDB", "PostgreSQL", "MySQL",
            "ExpoGo", "TailwindCSS", "Bootstrap", "HTML", "CSS",
            "GraphQL", "Laravel", "PHP", "Inertial.js",
            "GitHub", "GitLab", "Bitbucket", "WordPress"
          ].map((skill) => (
            <motion.span
              key={skill}
              whileHover={{ scale: 1.05 }}
              className="px-3 py-2 bg-white dark:bg-gray-800 ring-1 ring-purple-500/20 
              text-gray-700 dark:text-gray-300 rounded-lg text-xs sm:text-sm hover:ring-purple-500/40 
              shadow-sm hover:shadow transition-all duration-300"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
