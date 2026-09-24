import React from "react";
import { motion } from "framer-motion";
import Work from "../Components/Work";
import { personalDetails, workDetails, eduDetails } from "../Details";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function About() {
  return (
    <main className="relative min-h-screen grid-bg pt-32 pb-20">
      <div className="blob w-96 h-96 bg-blue-500 top-20 -left-20"></div>
      <div className="blob w-96 h-96 bg-purple-500 bottom-20 right-0"></div>

      <div className="container mx-auto max-width relative z-10 px-6">
        
        {/* About Section */}
        <section className="mb-16">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
              Get to know me
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-gray-900 dark:text-white mb-4">
              About <span className="gradient-text">Me</span>
            </h1>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col md:flex-row items-center gap-10 glass rounded-3xl p-8 md:p-12 shadow-xl"
          >
            {personalDetails.img && (
              <motion.div variants={itemVariants} className="flex-shrink-0">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 blur-2xl opacity-40"></div>
                  <img
                    src={personalDetails.img}
                    alt="Profile"
                    className="relative rounded-full w-40 h-40 md:w-56 md:h-56 object-cover shadow-2xl border-4 border-white dark:border-gray-800"
                  />
                </div>
              </motion.div>
            )}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
            >
              {personalDetails.about}
            </motion.p>
          </motion.div>
        </section>

        {/* Work Experience */}
        <section className="mb-16">
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-display text-gray-900 dark:text-white mb-8 flex items-center gap-3"
          >
            <span className="w-1.5 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></span>
            Work Experience
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {React.Children.toArray(
              workDetails.map(({ Position, Company, Location, Type, Duration, img, description, SKILLS, link }) => (
                <motion.div variants={itemVariants}>
                  <Work
                    position={Position}
                    company={Company}
                    location={Location}
                    type={Type}
                    duration={Duration}
                    img={img}
                    link={link}
                    SKILLS={SKILLS}
                    description={description}
                  />
                </motion.div>
              ))
            )}
          </motion.div>
        </section>

        {/* Education */}
        <section>
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-display text-gray-900 dark:text-white mb-8 flex items-center gap-3"
          >
            <span className="w-1.5 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></span>
            Education
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {React.Children.toArray(
              eduDetails.map(({ Position, Company, Location, Type, Duration, img, description, SKILLS }) => (
                <motion.div variants={itemVariants}>
                  <Work
                    position={Position}
                    company={Company}
                    location={Location}
                    type={Type}
                    duration={Duration}
                    img={img}
                    description={description}
                    SKILLS={SKILLS}
                  />
                </motion.div>
              ))
            )}
          </motion.div>
        </section>
      </div>
    </main>
  );
}

export default About;