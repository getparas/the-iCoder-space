import { MdArrowOutward } from "react-icons/md";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="pt-20" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8 text-4xl text-center lg:text-4xl"
      >
        Projects
      </motion.h2>
      <div className="pnpm ">
        {PROJECTS.map((project) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            key={project.id}
            className="relative overflow-hidden group rounded-3xl"
          >
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={project.image}
              alt={project.name}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
            <motion.div
              initial={{ opacity: 0 }} // Always visible on mobile
              whileHover={{ opacity: 1 }} // Only show on hover for larger screens
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white transition-opacity duration-500 opacity-100 backdrop-blur-lg lg:opacity-0 lg:group-hover:opacity-100"
            >
              <h3 className="mb-2 text-2xl">{project.name}</h3>
              <p className="mb-4 text-lg text-center">{project.description}</p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-black bg-white rounded-full hover:bg-gray-300"
              >
                <div className="flex items-center text-xl">
                  <span>View on GitHub</span>
                  <MdArrowOutward />
                </div>
              </a>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
