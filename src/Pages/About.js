import React from "react";
import { motion } from "framer-motion";
import Work from "../Components/Work";
import { personalDetails, workDetails, eduDetails } from "../Details";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
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

const imageVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "backOut"
    }
  }
};

function About() {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto max-width pt-10 pb-20 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg transition-all duration-300"
    >
      <section className="mb-10">
        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold border-b-2 border-gray-300 dark:border-gray-600 pb-2"
        >
          About Me
        </motion.h1>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row items-center gap-8 py-8"
        >
          {personalDetails.img && (
            <motion.div 
              variants={imageVariants}
              className="w-full md:w-1/4 flex justify-center"
            >
              <img 
                src={personalDetails.img} 
                alt="Profile" 
                className="rounded-full w-48 h-48 object-cover shadow-xl border-4 border-white dark:border-gray-600 hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          )}
          <motion.p 
            variants={itemVariants}
            className="text-content py-2 lg:max-w-3xl text-gray-700 dark:text-gray-300 md:w-3/4"
          >
            {personalDetails.about}
          </motion.p>
        </motion.div>
      </section>

      <section className="mb-10">
        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold border-b-2 border-gray-300 dark:border-gray-600 pb-2"
        >
          Work Experience
        </motion.h1>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8 mt-8"
        >
          {React.Children.toArray(
            workDetails.map(({ Position, Company, Location, Type, Duration, img, description, SKILLS, link }, index) => (
              <motion.div
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
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
                  className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                />
              </motion.div>
            ))
          )}
        </motion.div>
      </section>

      <section>
        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-3xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold border-b-2 border-gray-300 dark:border-gray-600 pb-2"
        >
          Education
        </motion.h1>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8 mt-8"
        >
          {React.Children.toArray(
            eduDetails.map(({ Position, Company, Location, Type, Duration, img, description, SKILLS }, index) => (
              <motion.div
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Work
                  position={Position}
                  company={Company}
                  location={Location}
                  type={Type}
                  duration={Duration}
                  img={img}
                  description={description}
                  SKILLS={SKILLS}
                  className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500"
                  isEducation={true}
                />
              </motion.div>
            ))
          )}
        </motion.div>
      </section>
    </motion.main>
  );
}

export default About;