import React from "react";
import { motion } from "framer-motion";
import { techStackDetails } from "../Details";

const Technologies = () => {
  const {
    html, css, js, react, redux, laravel, bootstrap, mongodb,
    vscode, git, github, npm, postman, figma, python, mysql,
    php, oracle, java, nodejs, lanC, xampp, pycharm, canva,
    HeidiSQL, UML, Tailwind, Apache, phpmyadmin, jquery
  } = techStackDetails;


  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto max-width pt-10 pb-20 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg"
    >

      <section className="mb-10">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold border-b-2 border-gray-300 dark:border-gray-600 pb-2"
        >
          Tech Stack
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-content py-2 lg:max-w-3xl text-gray-700 dark:text-gray-300"
        >
          Technologies I've been working with recently
        </motion.p>
        
        <motion.section 
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 items-center gap-6 pt-6"
        >
          {[
            { img: html, title: "HTML" },
            { img: css, title: "CSS" },
            { img: js, title: "JavaScript" },
            { img: react, title: "React" },
            { img: redux, title: "Redux" },
            { img: python, title: "Python" },
            { img: bootstrap, title: "Bootstrap" },
            { img: php, title: "PHP" },
            { img: mongodb, title: "MongoDB" },
            { img: laravel, title: "Laravel" },
            { img: mysql, title: "MySQL" },
            { img: oracle, title: "Oracle" },
            { img: java, title: "Java" },
            { img: nodejs, title: "Node.js" },
            { img: lanC, title: "C Language" },
            { img: UML, title: "UML" },
            { img: Tailwind, title: "Tailwind CSS" },
            { img: jquery, title: "jQuery" }
          ].map((tech, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ 
                scale: 1.1,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="tech-card bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md flex flex-col items-center justify-center h-full transition-all duration-300 hover:shadow-xl"
            >
              <img 
                src={tech.img} 
                title={tech.title} 
                alt={tech.title} 
                className="h-16 w-16 object-contain mb-2"
              />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mt-2">
                {tech.title}
              </span>
            </motion.div>
          ))}
        </motion.section>
      </section>


      <section className="mt-16">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold border-b-2 border-gray-300 dark:border-gray-600 pb-2"
        >
          Tools
        </motion.h1>
        
        <motion.section 
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 items-center gap-6 pt-6"
        >
          {[
            { img: github, title: "GitHub" },
            { img: git, title: "Git" },
            { img: npm, title: "NPM" },
            { img: figma, title: "Figma" },
            { img: vscode, title: "VS Code" },
            { img: postman, title: "Postman" },
            { img: xampp, title: "XAMPP" },
            { img: pycharm, title: "PyCharm" },
            { img: canva, title: "Canva" },
            { img: HeidiSQL, title: "HeidiSQL" },
            { img: Apache, title: "Apache" },
            { img: phpmyadmin, title: "phpMyAdmin" }
          ].map((tool, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ 
                scale: 1.1,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="tech-card bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md flex flex-col items-center justify-center h-full transition-all duration-300 hover:shadow-xl"
            >
              <img 
                src={tool.img} 
                title={tool.title} 
                alt={tool.title} 
                className="h-16 w-16 object-contain mb-2"
              />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mt-2">
                {tool.title}
              </span>
            </motion.div>
          ))}
        </motion.section>
      </section>
    </motion.main>
  );
};

export default Technologies;