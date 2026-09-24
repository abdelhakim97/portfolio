import React from "react";
import { motion } from "framer-motion";
import { techStackDetails } from "../Details";

const Technologies = () => {
  const {
    html, css, js, react, redux, laravel, bootstrap, mongodb,
    vscode, git, github, npm, postman, figma, python, mysql,
    php, oracle, java, nodejs, lanC, xampp, pycharm, canva,
    HeidiSQL, UML, Tailwind, Apache, phpmyadmin, jquery,
  } = techStackDetails;

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
  };

  const item = {
    hidden: { y: 20, opacity: 0, scale: 0.9 },
    visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  const techStack = [
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
    { img: jquery, title: "jQuery" },
  ];

  const tools = [
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
    { img: phpmyadmin, title: "phpMyAdmin" },
  ];

  const TechCard = ({ img, title, index }) => (
    <motion.div
      variants={item}
      whileHover={{ y: -8, scale: 1.05 }}
      className="glass rounded-2xl p-4 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 border border-white/20 group cursor-pointer"
    >
      <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
        <img src={img} alt={title} className="w-full h-full object-contain" />
      </div>
      <span className="text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
        {title}
      </span>
    </motion.div>
  );

  return (
    <main className="relative min-h-screen grid-bg pt-32 pb-20">
      <div className="blob w-96 h-96 bg-blue-500 top-20 -left-20"></div>
      <div className="blob w-96 h-96 bg-purple-500 bottom-20 right-0"></div>

      <div className="container mx-auto max-width px-6 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            What I work with
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-gray-900 dark:text-white mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Tech Stack */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold font-display text-gray-900 dark:text-white mb-8 flex items-center gap-3">
            <span className="w-1.5 h-7 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></span>
            Technologies
          </h2>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          >
            {techStack.map((tech, index) => (
              <TechCard key={index} {...tech} index={index} />
            ))}
          </motion.div>
        </section>

        {/* Tools */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold font-display text-gray-900 dark:text-white mb-8 flex items-center gap-3">
            <span className="w-1.5 h-7 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></span>
            Tools & Software
          </h2>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          >
            {tools.map((tool, index) => (
              <TechCard key={index} {...tool} index={index} />
            ))}
          </motion.div>
        </section>
      </div>
    </main>
  );
};

export default Technologies;