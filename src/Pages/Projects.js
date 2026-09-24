import React from "react";
import { motion } from "framer-motion";
import Project from "../Components/Project";
import { projectDetails } from "../Details";

function Projects() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <main className="relative min-h-screen grid-bg pt-32 pb-20">
      <div className="blob w-96 h-96 bg-blue-500 top-20 -left-20"></div>
      <div className="blob w-96 h-96 bg-purple-500 bottom-20 right-0"></div>

      <section className="container mx-auto max-width px-6 relative z-10">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            Portfolio Showcase
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-gray-900 dark:text-white mb-4">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I've worked on — from full-stack web apps to modern interfaces.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectDetails.map((project, index) => (
            <motion.div key={index} variants={item}>
              <Project
                title={project.title}
                image={project.image}
                description={project.description}
                techstack={project.techstack}
                previewLink={project.previewLink}
                githubLink={project.githubLink}
                linkVideo={project.linkVideo}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}

export default Projects;