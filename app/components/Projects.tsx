"use client";
import { FaGithub, FaGitlab } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Research Model Modulo de Odoo",
    description:
      "El módulo Research Model extiende la funcionalidad de OpenEduCat ERP en Odoo, permitiendo a los docentes publicar, reportar y descargar investigaciones como parte del contenido programático.",
    image: "/Images/project.jpg",
    tags: ["Odoo 14", "Python", "PostgreSQL", "XML/QWeb", "JavaScript", "HTML + CSS/SCSS"],
    demoUrl: "#",
    githubUrl: "https://gitlab.com/leonardo162/research_model.git",
    color: "from-sky-500 to-blue-600",
  },
  {
    title: "Student Contract Modulo de Odoo",
    description:
      "Extensión para OpenEduCat ERP que permite gestionar contratos estudiantiles con dashboards gráficos y paneles embebidos en Power BI para análisis académico-administrativo.",
    image: "/Images/project.jpg",
    tags: ["Odoo 14", "Python", "PostgreSQL", "XML / QWeb", "JavaScript", "HTML + CSS/SCSS", "Power BI Embedded"],
    demoUrl: "#",
    githubUrl: "https://gitlab.com/leonardo162/student_contract.git",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Movilje-Auth-Portal",
    description:
      "Sistema de autenticación fullstack con Laravel (PHP), Inertia.js y Quasar Framework. Implementado para Inversiones Movil Je.",
    image: "/Images/project.jpg",
    tags: ["Laravel (PHP)", "Inertia.js", "Quasar Framework", "MySQL Server"],
    demoUrl: "#",
    githubUrl: "https://gitlab.com/leonardo162/movilje-auth-portal.git",
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Saeplus",
    description:
      "Sistema empresarial con módulos de facturación, servicios y más. Participación como desarrollador de soporte.",
    image: "/Images/project.jpg",
    tags: ["Node", "PHP", "JavaScript", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "https://gitlab.com/leonardo162/saeplus.git",
    color: "from-indigo-500 to-violet-600",
  },
  {
    title: "Disruptive-media-test-app",
    description:
      "Sistema de gestión multimedia con NestJS y Node.js. Arquitectura backend, entornos y despliegue en producción.",
    image: "/Images/project.jpg",
    tags: ["NestJS", "Node.js", "Docker", "TypeScript"],
    demoUrl: "#",
    githubUrl: "https://github.com/ferrarileonardo/disruptive-media-test-ap.git",
    color: "from-indigo-500 to-violet-600",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-16 sm:py-20 bg-background text-foreground">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        {/* GRID RESPONSIVE */}
        <div className="grid gap-8 sm:gap-10 md:grid-cols-2">

          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="group relative bg-white dark:bg-gray-800/50 rounded-2xl overflow-hidden border shadow-sm hover:shadow-lg transition-all"
            >
              {/* Imagen */}
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/60 transition-opacity duration-300 group-hover:opacity-30" />

                {/* Tags */}
                <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs sm:text-sm bg-transparent text-white rounded-lg 
                                 backdrop-blur-sm border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-3">{project.title}</h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-6">
                  {project.description}
                </p>

                {/* Botón */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-white dark:bg-gray-800 text-gray-800 dark:text-white 
                               rounded-lg flex items-center gap-2 border text-sm sm:text-base"
                  >
                    {project.githubUrl.includes("gitlab.com") ? (
                      <FaGitlab className="w-5 h-5" />
                    ) : (
                      <FaGithub className="w-5 h-5" />
                    )}
                    View Code
                  </motion.a>
                </div>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
