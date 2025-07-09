import React from "react";
import { motion } from "framer-motion";
import Project from "../Components/Project";
import { projectDetails } from "../Details";

function Projects() {

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <main className="container mx-auto max-width pt-10 pb-20 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
      <section className="px-6">

        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold border-b-2 border-gray-300 dark:border-gray-600 pb-2 mb-8"
        >
          My Projects
        </motion.h1>

  
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectDetails.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              image={project.image}
              description={project.description}
              techstack={project.techstack}
              previewLink={project.previewLink}
              githubLink={project.githubLink}
              linkVideo={project.linkVideo}
            />
          ))}
        </motion.div>
      </section>
    </main>
  );
}

export default Projects;