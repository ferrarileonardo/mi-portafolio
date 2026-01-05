"use client";
import { FaGithub, FaGitlab } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Research Model Modulo de Odoo",
    description:
      "El módulo Research Model extiende la funcionalidad de OpenEduCat ERP en Odoo, permitiendo a los docentes publicar, reportar y descargar investigaciones.Como parte del contenido programático de sus materias.",
    image: "/Images/project.jpg",
    tags: ["Odoo 14", "Python", "PostgreSQL", "XML/QWeb","JavaScript","HTML + CSS/SCSS"],
    demoUrl: "#",
    githubUrl: "https://gitlab.com/leonardo162/research_model.git", // GitLab
    color: "from-sky-500 to-blue-600",
  },
  {
    title: "Student Contract Modulo de Odoo",
    description:
      "Extensión para OpenEduCat ERP que permite gestionar contratos estudiantiles de forma centralizada, con dashboards gráficos y paneles embebidos en Power BI para análisis y seguimiento académico-administrativo.",
    image: "/Images/project.jpg",
    tags: ["Odoo 14", "Python", "PostgreSQL", "XML / QWeb","JavaScript","HTML + CSS/SCSS","Power BI Embedded"],
    demoUrl: "#",
    githubUrl: "https://gitlab.com/leonardo162/student_contract.git", // GitLab
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Movilje-Auth-Portal",
    description:
      "Sistema de Autenticación Fullstack desarrollado para Inversiones Movil Je, implementado con Laravel (PHP) en el backend y Inertia.js + Quasar Framework en el frontend.",
    image: "/Images/project.jpg",
    tags: ["Laravel (PHP)", "Inertia.js", "Quasar Framework", "MySQL Server"],
    demoUrl: "#",
    githubUrl: "https://gitlab.com/leonardo162/movilje-auth-portal.git", // GitLab
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Saeplus",
    description:
      "Sistema desarrollado por la empresa saeplus el cual tiene muchos modulos en cuanto a facturacion servicios y otras funcionalidades tuve participacion como desarrollador de soporte",
    image: "/Images/project.jpg",
    tags: ["Node", "PHP", "JavaScript", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "https://gitlab.com/leonardo162/saeplus.git", // GitLab
    color: "from-indigo-500 to-violet-600",
  },
  {
    title: "Disruptive-media-test-ap",
    description:
      "Sistema de gestión y administración de usuarios desarrollado con NestJS y Node.js, integrando módulos para generar y almacenar contenidos multimedia categorizados por música y género. Participé en la construcción de la arquitectura backend, configuración de entornos y despliegue en producción, asegurando escalabilidad y eficiencia en la administración de datos.",
    image: "/Images/project.jpg",
    tags: ["NestJS", "Node.js", "Docker", "TypeScript"],
    demoUrl: "#",
    githubUrl: "https://github.com/ferrarileonardo/disruptive-media-test-ap.git", // GitHub
    color: "from-indigo-500 to-violet-600",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 bg-background text-foreground">
      <div className="container max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div key={project.title} className="group relative bg-white dark:bg-gray-800/50 rounded-2xl overflow-hidden border">
              {/* Imagen del proyecto */}
              <div className="relative h-64 overflow-hidden">
                <Image src={project.image} alt={project.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/60 transition-opacity duration-300 group-hover:opacity-30" />

                {/* Tags flotantes */}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-transparent text-white rounded-lg 
                                 backdrop-blur-sm border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contenido del proyecto */}
              <div className="p-8">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8">{project.description}</p>

                {/* Botón View Code */}
                <div className="flex gap-4 flex-col md:flex-row">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg flex items-center gap-2 border"
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
