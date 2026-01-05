import { motion } from "framer-motion";
import Image from "next/image"; // <-- IMPORTACIÓN NECESARIA

export default function About() {
  // Fecha inicial de experiencia
  const startDate = new Date("2021-01-01");
  const today = new Date();

  // Diferencia en años
  const yearsOfExperience =
    today.getFullYear() - startDate.getFullYear() -
    (today < new Date(today.getFullYear(), startDate.getMonth(), startDate.getDate()) ? 1 : 0);

  return (
    <section
      id="about"
      className="scroll-mt-0 py-32 px-6 max-w-6xl mx-auto flex flex-col items-center text-center bg-background text-foreground"
    >
       
  {/* Foto arriba del título */}
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
      width={200}
      height={200}
      className="rounded-full object-cover shadow-lg border-4 border-purple-500"
    />
  </motion.div>
      <h2 className="text-4xl font-bold text-purple-500 mb-6">Sobre mí</h2>
      
      <p className="max-w-2xl text-lg text-gray-300">
        Soy desarrollador web con{" "}
        <span className="font-semibold">{yearsOfExperience}</span> años de experiencia en proyectos frontend y backend 
        . He trabajado con diferentes tecnologías desarrollando paneles administrativos, 
        apps móviles y módulos personalizados .Me apasiona crear soluciones funcionales, escalables y visualmente atractivas, integrando rendimiento técnico 
        con una experiencia de usuario .
      </p>
      <div className="mt-8 flex gap-4 justify-center">
       
<a
  href="/CV2.pdf"
  download="CV2.pdf"
  className="border border-purple-500 text-purple-500 px-6 py-2 rounded hover:bg-purple-500 hover:text-white transition"
>
  Descargar CV
</a>
 </div>

   {/* Skills Section */}
<div className="mt-12">
  <h3 className="text-4xl font-bold text-purple-500 dark:text-white mb-6">
    Tecnologías que manejo
  </h3>
  <div className="flex flex-wrap gap-3">
    {[
      'React.js', 'ReactNative', 'Next.js', 'TypeScript', 'JavaScript',
      'Node.js', 'NestJS', 'MongoDB', 'PostgreSQL', 'MySQL',
      'ExpoGo', 'TailwindCSS', 'Bootstrap', 'HTML', 'CSS', 
      'GraphQL',  'Laravel', 'PHP', 'Inertial.js',
      'GitHub', 'GitLab', 'Bitbucket', 'WordPress'
    ].map((skill) => (
      <motion.span
        key={skill}
        whileHover={{ scale: 1.05 }}
        className="px-4 py-2 bg-white dark:bg-gray-800 ring-1 ring-purple-500/20 
              text-gray-700 dark:text-gray-300 rounded-lg text-sm hover:ring-purple-500/40 
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



